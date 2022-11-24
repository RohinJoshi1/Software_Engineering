import array
import numpy as np
from flask import Flask,request,jsonify,render_template
import pickle
from sklearn import *
from sklearn.preprocessing import PolynomialFeatures
#create flask app
app = Flask(__name__)

#Load pickle model
model = pickle.load(open("model.pkl","rb"))
fits = pickle.load(open("poly.pkl","rb"))
@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/predict",methods=["POST"])
def predict():
    int_features = [[int(x) for x in request.form.values()]]
    final_features = fits.transform(int_features)
    prediction = model.predict(final_features)
    # output = round(prediction[0], 2)

    return render_template('index.html', prediction_text='Population should be {}'.format(int(prediction[0])))

if __name__ == "__main__" :
    app.run(debug = True)
