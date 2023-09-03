from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

def prediction(lst):
    filename = 'model/predictor.pickle'
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value

@app.route('/', methods=['POST', 'GET'])
def index():
    pred_value = 0
    if request.method == 'POST':
        Temperature = request.form['Temperature']
        Humidity = request.form['Humidity']
        Rainfall = request.form['Rainfall']
        Moisture = request.form['Moisture']
        Windspeed = request.form['Windspeed']
        Disease = request.form['Disease']
        
        
        feature_list = []

        feature_list.append(float(Temperature))
        feature_list.append(int(Humidity))
        feature_list.append(int(Rainfall))
        feature_list.append(int(Moisture))
        feature_list.append(float(Windspeed))
        Disease_list = ['Anthracnose','Dieback','Leaf spot','Root rot']

        def traverse_list(lst, value):
            for item in lst:
                if item == value:
                    feature_list.append(1)
                else:
                    feature_list.append(0)
        
        traverse_list(Disease_list, Disease)

        pred_value = prediction(feature_list)
        rounded_value = np.round(pred_value, decimals=2)

    return render_template('index.html', pred_value=pred_value)


if __name__ == '__main__':
    app.run(debug=True)