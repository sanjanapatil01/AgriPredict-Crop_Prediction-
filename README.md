

# 🌾 Crop Prediction System

###  **An AI-based Smart Crop Recommendation Platform (99% Accuracy with XGBoost Classifier)**

This project helps farmers and agricultural experts determine the **best suitable crop** to cultivate based on soil and environmental conditions such as temperature, humidity, pH, water availability, and season.

Using a trained **XGBoost Classifier**, it predicts the optimal crop that yields the highest productivity under given environmental conditions — achieving an impressive **99% accuracy** on test data.

---

##  Problem Statement

Farmers often face challenges in selecting the right crop due to unpredictable climate changes, poor soil management, and lack of technical guidance.
Incorrect crop selection can result in **low yield, economic loss, and soil degradation**.

🌱 **Goal:**
To develop a **web-based intelligent system** that recommends the most suitable crop by analyzing key environmental and soil parameters using **Machine Learning**.

---



## Technologies Used

| Category                  | Technology                           |
| ------------------------- | ------------------------------------ |
| **Frontend**              | React.js, Axios, HTML5, CSS3         |
| **Backend**               | Flask (Python)                       |
| **Machine Learning**      | XGBoost, scikit-learn, pandas, NumPy |
| **Model Storage**         | Pickle (`pipe.pkl`, `encoder.pkl`)   |
| **Deployment (optional)** | Render (Flask) + Vercel (React)      |

---

## 📁 Folder Structure

```
CropPredictionSystem/
│
├── backend/
│   ├── app.py               # Flask backend API
│   ├── pipe.pkl             # Trained ML pipeline with XGBoost
│   
│
├── frontend/
│   ├── public/              # Public React assets
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js      # Home page with instructions
│   │   │   ├── CropPredict.js  # Crop prediction form page
│   │   ├── App.js           # Router + Page handling
│   │   ├── App.css          # Styling
│   ├── package.json         # React dependencies
│
├── .gitignore               # Ignored files
├── README.md                # Project documentation
```

---

## ⚙️ How to Run Locally

###  1️⃣ Clone the Repository

```bash
git clone https://github.com/sanjanapatil01/AgriPredict_Crop_prediction.git
cd AgriPredict_Crop_prediction
```

---

###  2️⃣ Setup and Run the Flask Backend

```bash
cd backend
python app.py
```

 Flask server runs on: `http://127.0.0.1:5000`

---

###  3️⃣ Setup and Run the React Frontend

```bash
cd frontend
npm install
npm start
```

 React runs on: `http://localhost:3000`

---

###  4️⃣ Connect Backend & Frontend

Ensure Flask (`:5000`) and React (`:3000`) are both running locally.
The React frontend communicates with the Flask API using Axios.

---

##  Screenshots

|  Home Page                                                               | 🌿 Crop Input Form                                                         | 🌾 Predicted Result                                                       |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ![Home Page](https://github.com/sanjanapatil01/AgriPredict-Crop_Prediction-/blob/main/Screenshot%202025-11-09%20234433.png) | ![Crop Form](https://github.com/sanjanapatil01/AgriPredict-Crop_Prediction-/blob/main/Screenshot%202025-11-09%20234516.png) | ![Result](https://github.com/sanjanapatil01/AgriPredict-Crop_Prediction-/blob/main/Screenshot%202025-11-09%20234549.png) |






## ❤️


> “Technology is the seed of a sustainable harvest.” 🌱

---

