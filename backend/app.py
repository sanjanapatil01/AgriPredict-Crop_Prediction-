from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows React frontend to access Flask API

# ------------------------------
# 1️⃣ Load the ML model and encoder
# ------------------------------
with open("pipe.pkl", "rb") as f:
    model = pickle.load(f)

# Load encoder if available
try:
    with open("encoder.pkl", "rb") as f:
        encoder = pickle.load(f)
except FileNotFoundError:
    encoder = None
    print("⚠️ encoder.pkl not found. Predictions will return encoded integers.")

# ------------------------------
# 2️⃣ Define API routes
# ------------------------------
@app.route('/')
def home():
    return jsonify({"message": "🌾 Crop Prediction API is running successfully!"})


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # ------------------------------
        # Extract input fields from request JSON
        # ------------------------------
        temperature = float(data['temperature'])
        humidity = float(data['humidity'])
        ph = float(data['ph'])
        water = float(data['water_availability'])
        season = data['season']

        # ------------------------------
        # Prepare input for model
        # ------------------------------
        df = pd.DataFrame(
            [[temperature, humidity, ph, water, season]],
            columns=['temperature', 'humidity', 'ph', 'water availability', 'season']
        )

        # ------------------------------
        # Run prediction
        # ------------------------------
        y_pred_encoded = model.predict(df)[0]

        # ------------------------------
        # Decode label if encoder available
        # ------------------------------
        if encoder is not None:
            y_pred_label = encoder.inverse_transform([[y_pred_encoded]])[0][0]
        else:
            y_pred_label = int(y_pred_encoded)

        # ------------------------------
        # Return JSON response
        # ------------------------------
        return jsonify({
            "predicted_crop": y_pred_label,
            "status": "success"
        })

    except Exception as e:
        print("❌ Error during prediction:", e)
        return jsonify({
            "error": str(e),
            "status": "failed"
        }), 500


# ------------------------------
# 3️⃣ Run Flask App
# ------------------------------
if __name__ == '__main__':
    app.run(debug=True)
