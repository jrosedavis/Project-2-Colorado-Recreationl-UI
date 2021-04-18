from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify
import numpy as np
import pandas as pd

#Connect using the app.config and URI to user postgres sql and db
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:postgres@localhost:5432/colorado_camping_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

reservations = db.Table('reservations', db.metadata, autoload=True, autoload_with=db.engine)
nps_summary = db.Table('nps_summary', db.metadata, autoload=True, autoload_with=db.engine)
nps_comments = db.Table('nps_comments', db.metadata, autoload=True, autoload_with=db.engine)
geocode_info = db.Table('geocode_info', db.metadata, autoload=True, autoload_with=db.engine)

#Create a home route that defines all other routes
@app.route('/')
def home():
    return (
        f"<strong>Reservations Table:</strong><br/>"
        f"<a href=/api/v1.0/reservationstable>List: RTable</a><br/>"
        '<br/>'
        f"<strong>NPS_Summary Table:</strong><br/>"
        f"<a href=/api/v1.0/nps_summary>List: NPS_Sum Table</a><br/>"
        '<br/>'
        f"<strong>Nps_comments Table:</strong><br/>"
        f"<a href=/api/v1.0/nps_comments>List: NPS_Comments Table</a><br/>"
        '<br/>'
        f"<strong>Geo Info Table:</strong><br/>"
        f"<a href=/api/v1.0/geocode_info>List: GeoInfo Table</a><br/>")

@app.route('/api/v1.0/reservationstable')
def reserve():
    res_results = db.session.query(reservations).all()
    results = list(np.ravel(res_results))
    return jsonify(results)

@app.route('/api/v1.0/nps_summary')
def nps_sum():
    nps_results = db.session.query(nps_summary).all()
    # results = list(np.ravel(nps_results))
    
    nps_df = pd.DataFrame(nps_results)

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

    park_dict={}

    parks=list(nps_df ["Park"].unique())
    parks

    for park in parks:
        each_park_dict={'Year':list(nps_df[nps_df["Park"]==park]["Year"]),
                        'Month':list(nps_df[nps_df["Park"]==park]["Month"]),
                        'Visitors':list(nps_df[nps_df["Park"]==park]["Recreation_ Visitors"]),
                        'Tent':list(nps_df[nps_df["Park"]==park]["Tent_Campers"]),
                        'RV':list(nps_df[nps_df["Park"]==park]["RV_Campers"])
                    }
        park_dict[f'{park}']=each_park_dict
           
    return jsonify(park_dict)

@app.route('/api/v1.0/nps_comments')
def comments():
    comments_results = db.session.query(nps_comments).all()
    c_results = list(np.ravel(comments_results))
    return jsonify(c_results)

@app.route('/api/v1.0/geocode_info')
def geo():
    geo_results = db.session.query(geocode_info).all()
    g_results = list(np.ravel(geo_results))
    return jsonify(g_results)

#Run the app
if __name__ == '__main__':
    app.run(debug=True)
