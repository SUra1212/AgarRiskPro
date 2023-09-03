from flask import Flask, render_template, request
import pickle
import numpy as np

# setup application
app = Flask(__name__)

def prediction(lst):
    filename = 'model/predictor.pickle'
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value

@app.route('/', methods=['POST', 'GET'])
def index():
    # return "Hello World"
    pred_value = 0
    if request.method == 'POST':
        Windspeed = request.form['Windspeed']
        Humidity = request.form['Humidity']
        Disease = request.form['Disease']
        Temperature = request.form['Temperature']
        
        feature_list = []

        feature_list.append(float(Windspeed))
        feature_list.append(int(Humidity))
        feature_list.append(float(Temperature))

        Disease_list = ['Anthracnose','Downy mildew','Powdery mildew','Rust']

        def traverse_list(lst, value):
            for item in lst:
                if item == value:
                    feature_list.append(1)
                else:
                    feature_list.append(0)
        
        traverse_list(Disease_list, Disease)

        pred_value = prediction(feature_list)
        pred_value = np.round(pred_value[0], decimals=2)

    return render_template('index1.html', pred_value=pred_value)


if __name__ == '__main__':
    app.run(debug=True)