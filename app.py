from flask import Flask, render_template, redirect, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
# import numpy as np
# import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
import psycopg2
import os

from dotenv import load_dotenv


load_dotenv()

#Connect using the app.config and URI to user postgres sql and db
app = Flask(__name__)

CORS(app, support_credentials=True)

# # UNCOMMENT THE TWO LINES OF CODE BELOW TO RUN ON THE HEROKU POSTGRESQL DATABASE
# DATABASE_URL=os.environ.get('DATABASE_URL')
# engine=create_engine(DATABASE_URL.replace('://', 'ql://'))

# COMMENT/UNCOMMENT THE TWO LINES BELOW TO USE THE LOCAL POSTGRESQL DATABASE
connection_string='postgres:postgres@localhost:5432/colorado_camping_db'
engine=create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()
# Base=declarative_base()

# reflect the tables
Base.prepare(engine, reflect=True)
# Base.metadata.create_all(engine)

# Save references to each table
# Reservations=Base.classes.reservations
geocode_info=Base.classes.geocode_info
nps_summary=Base.classes.nps_summary
# NPS_Comments=Base.classes.nps_comments

#Create a home route that defines all other routes
@app.route('/')
def home():
    return (
        f"<strong>Rocky Mountain National Park:</strong><br/>"
        f"<a href=/nps_rmnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Mesa Verde National Park:</strong><br/>"
        f"<a href=/nps_mvnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Great Sand Dunes National Park & PRES:</strong><br/>"
        f"<a href=/nps_gsdnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Black Canyon of the Gunnison National Park:</strong><br/>"
        f"<a href=/nps_bcnp>Monthly Dictionary</a><br/>"
        '<br/>'
        f"<strong>Facility Geocode Information:</strong><br/>"
        f"<a href=/geocode>Monthly Dictionary</a><br/>"
        '<br/>')

@app.route('/nps_rmnp')
def nps_rmnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(nps_summary.Park,nps_summary.Year,nps_summary.Month, nps_summary.Recreation_Visitors,nps_summary.Tent_Campers, nps_summary.RV_Campers )\
        .filter(nps_summary.Park=="Rocky Mountain NP").all()
    
    # df = pd.DataFrame(results)

    rmnp={'January':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'February':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
        'March':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'April':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
            'May':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'June':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                'July':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'August':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                    'September':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'October':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                        'November':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'December':{'Year':[],'Rec':[],'Tent':[],'RV':[]}}
    
    # months=list(df["Month"].unique())
    # months=['January','February','March','April','May','June','July','August','September','October','November','December']

    for each_result in results:
        rmnp[f'{each_result.Month}']['Year'].append(each_result.Year)
        rmnp[f'{each_result.Month}']['Rec'].append(each_result.Recreation_Visitors)
        rmnp[f'{each_result.Month}']['Tent'].append(each_result.Tent_Campers)
        rmnp[f'{each_result.Month}']['RV'].append(each_result.RV_Campers)

    return jsonify(rmnp)

@app.route('/nps_mvnp')
def nps_mvnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(nps_summary.Park,nps_summary.Year,nps_summary.Month, nps_summary.Recreation_Visitors,nps_summary.Tent_Campers, nps_summary.RV_Campers )\
        .filter(nps_summary.Park=="Mesa Verde NP").all()
    
    # df = pd.DataFrame(results)

    mvnp={'January':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'February':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
        'March':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'April':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
            'May':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'June':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                'July':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'August':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                    'September':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'October':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                        'November':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'December':{'Year':[],'Rec':[],'Tent':[],'RV':[]}}
    # months=list(df["Month"].unique())
    # months=['January','February','March','April','May','June','July','August','September','October','November','December']

    for each_result in results:
        mvnp[f'{each_result.Month}']['Year'].append(each_result.Year)
        mvnp[f'{each_result.Month}']['Rec'].append(each_result.Recreation_Visitors)
        mvnp[f'{each_result.Month}']['Tent'].append(each_result.Tent_Campers)
        mvnp[f'{each_result.Month}']['RV'].append(each_result.RV_Campers)

    return jsonify(mvnp)

@app.route('/nps_gsdnp')
def nps_gsdnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(nps_summary.Park,nps_summary.Year,nps_summary.Month, nps_summary.Recreation_Visitors,nps_summary.Tent_Campers, nps_summary.RV_Campers )\
        .filter(nps_summary.Park=="Great Sand Dunes NP & PRES").all()
    
    # df = pd.DataFrame(results)

    gsdnp={'January':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'February':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
        'March':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'April':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
            'May':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'June':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                'July':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'August':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                    'September':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'October':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                        'November':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'December':{'Year':[],'Rec':[],'Tent':[],'RV':[]}}
    
    # months=list(df["Month"].unique())
    # months=['January','February','March','April','May','June','July','August','September','October','November','December']

    for each_result in results:
        gsdnp[f'{each_result.Month}']['Year'].append(each_result.Year)
        gsdnp[f'{each_result.Month}']['Rec'].append(each_result.Recreation_Visitors)
        gsdnp[f'{each_result.Month}']['Tent'].append(each_result.Tent_Campers)
        gsdnp[f'{each_result.Month}']['RV'].append(each_result.RV_Campers)

    return jsonify(gsdnp)

@app.route('/nps_bcnp')
def nps_bcnp():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(nps_summary.Park,nps_summary.Year,nps_summary.Month, nps_summary.Recreation_Visitors,nps_summary.Tent_Campers, nps_summary.RV_Campers )\
        .filter(nps_summary.Park=="Black Canyon of the Gunnison NP").all()
    
    # df = pd.DataFrame(results)

    bcnp={'January':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'February':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
        'March':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'April':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
            'May':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'June':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                'July':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'August':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                    'September':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'October':{'Year':[],'Rec':[],'Tent':[],'RV':[]},\
                        'November':{'Year':[],'Rec':[],'Tent':[],'RV':[]},'December':{'Year':[],'Rec':[],'Tent':[],'RV':[]}}
    
    # months=list(df["Month"].unique())
    # months=['January','February','March','April','May','June','July','August','September','October','November','December']

    for each_result in results:
        bcnp[f'{each_result.Month}']['Year'].append(each_result.Year)
        bcnp[f'{each_result.Month}']['Rec'].append(each_result.Recreation_Visitors)
        bcnp[f'{each_result.Month}']['Tent'].append(each_result.Tent_Campers)
        bcnp[f'{each_result.Month}']['RV'].append(each_result.RV_Campers)

    return jsonify(bcnp)

@app.route('/geocode')
def facility_geocode():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # rmnp_results=conn.execute("Select * FROM nps_summary")
    
    results = session.query(geocode_info).all()
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