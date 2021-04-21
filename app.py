from flask import Flask, render_template, redirect, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
import psycopg2

#Connect using the app.config and URI to user postgres sql and db
app = Flask(__name__)

connection_string='postgres:postgres@localhost:5432/colorado_camping_db'
engine=create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
Reservations=Base.classes.reservations
Geo_Info=Base.classes.geocode_info
NPS_Summary=Base.classes.nps_summary
NPS_Comments=Base.classes.nps_comments

#Create a home route that defines all other routes
@app.route('/')
def home():
    return (
        f"<strong>Rocky Mountain National Park:</strong><br/>"
        f"<a href=/api/v1.0/nps_rmnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Mesa Verde National Park:</strong><br/>"
        f"<a href=/api/v1.0/nps_mvnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Great Sand Dunes National Park & PRES:</strong><br/>"
        f"<a href=/api/v1.0/nps_gsdnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Black Canyon of the Gunnison National Park:</strong><br/>"
        f"<a href=/api/v1.0/nps_bcnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Facility Geocode Information:</strong><br/>"
        f"<a href=/api/v1.0/geocode>Monthly Dictionary</a><br/>"
        '<br/>')

@app.route('/api/v1.0/nps_rmnp')
def nps_rmnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(NPS_Summary.Park,NPS_Summary.Year,NPS_Summary.Month, NPS_Summary.Recreation_Visitors,NPS_Summary.Tent_Campers,NPS_Summary.RV_Campers )\
        .filter(NPS_Summary.Park=="Rocky Mountain NP").all()
    
    df = pd.DataFrame(results)

    month_dict={}
    months=list(df["Month"].unique())
    
    for month in months:
        each_month_dict={'Year':list(df[df["Month"]==month]["Year"]),
                        'Visitors':list(df[df["Month"]==month]["Recreation_Visitors"]),
                        'Tent':list(df[df["Month"]==month]["Tent_Campers"]),
                        'RV':list(df[df["Month"]==month]["RV_Campers"])
                    }
        month_dict[f'{month}']=each_month_dict
    return jsonify(month_dict)

@app.route('/api/v1.0/nps_mvnp')
def nps_mvnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(NPS_Summary.Park,NPS_Summary.Year,NPS_Summary.Month, NPS_Summary.Recreation_Visitors,NPS_Summary.Tent_Campers,NPS_Summary.RV_Campers )\
        .filter(NPS_Summary.Park=="Mesa Verde NP").all()
    
    df = pd.DataFrame(results)

    month_dict={}
    months=list(df["Month"].unique())
    
    for month in months:
        each_month_dict={'Year':list(df[df["Month"]==month]["Year"]),
                        'Visitors':list(df[df["Month"]==month]["Recreation_Visitors"]),
                        'Tent':list(df[df["Month"]==month]["Tent_Campers"]),
                        'RV':list(df[df["Month"]==month]["RV_Campers"])
                    }
        month_dict[f'{month}']=each_month_dict
    return jsonify(month_dict)

@app.route('/api/v1.0/nps_gsdnp')
def nps_gsdnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(NPS_Summary.Park,NPS_Summary.Year,NPS_Summary.Month, NPS_Summary.Recreation_Visitors,NPS_Summary.Tent_Campers,NPS_Summary.RV_Campers )\
        .filter(NPS_Summary.Park=="Great Sand Dunes NP & PRES").all()
    
    df = pd.DataFrame(results)

    month_dict={}
    months=list(df["Month"].unique())
    
    for month in months:
        each_month_dict={'Year':list(df[df["Month"]==month]["Year"]),
                        'Visitors':list(df[df["Month"]==month]["Recreation_Visitors"]),
                        'Tent':list(df[df["Month"]==month]["Tent_Campers"]),
                        'RV':list(df[df["Month"]==month]["RV_Campers"])
                    }
        month_dict[f'{month}']=each_month_dict
    return jsonify(month_dict)

@app.route('/api/v1.0/nps_bcnp')
def nps_bcnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(NPS_Summary.Park,NPS_Summary.Year,NPS_Summary.Month, NPS_Summary.Recreation_Visitors,NPS_Summary.Tent_Campers,NPS_Summary.RV_Campers )\
        .filter(NPS_Summary.Park=="Black Canyon of the Gunnison NP").all()
    
    df = pd.DataFrame(results)

    month_dict={}
    months=list(df["Month"].unique())
    
    for month in months:
        each_month_dict={'Year':list(df[df["Month"]==month]["Year"]),
                        'Visitors':list(df[df["Month"]==month]["Recreation_Visitors"]),
                        'Tent':list(df[df["Month"]==month]["Tent_Campers"]),
                        'RV':list(df[df["Month"]==month]["RV_Campers"])
                    }
        month_dict[f'{month}']=each_month_dict
    return jsonify(month_dict)

@app.route('/api/v1.0/geocode')
def facility_geocode():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(Geo_Info).all()
    facilities={}
    for each_result in results:
        facility={}
        facility={'Region':each_result.RegionDescription,
                  'Park':each_result.Park,
                  'State': each_result.FacilityState,
                  'Longitude': each_result.FacilityLongitude,
                  'Latitude': each_result.FacilityLatitude,
                  'City': each_result.CityPlace,
                  'County': each_result.County,
                  }

        facilities[f'{each_result.FacilityID}']=facility
    return jsonify(facilities)


@app.route('/api/v1.0/reservations')
def reservations():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(Reservations)\
        .filter(Reservations.SiteType==).all()
    freservations={}
    for each_result in results:
        reservation={}
        reservation={'OrderNumber':each_result.RegionDescription,
                  'Park':each_result.Park,
                  'State': each_result.FacilityState,
                  'Longitude': each_result.FacilityLongitude,
                  'Latitude': each_result.FacilityLatitude,
                  'City': each_result.CityPlace,
                  'County': each_result.County,
                  }

        facilities[f'{each_result.FacilityID}']=facility
    return jsonify(facilities)

#Run the app
if __name__ == '__main__':
    app.run(debug=True)

# coordinates_dict={
#     "Black Canyon of the Gunnison NP":{
#         "Latitude":38.5754,
#         "Longitude":-107.7416
#     },
#     "Great Sand Dunes NP & PRES":{
#         "Latitude":37.7275,
#         "Longitude":-105.6418
#     },
#     "Mesa Verde NP":{
#         "Latitude":37.2309,
#         "Longitude":-108.4618
#     },
#     "Rocky Mountain NP":{
#         "Latitude":40.3428,
#         "Longitude":-105.6836
#     }
        
# }