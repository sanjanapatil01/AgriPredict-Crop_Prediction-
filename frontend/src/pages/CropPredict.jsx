import React, { useState } from "react";
import axios from "axios";
import "./CropPredict.css";

function CropPredict() {
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    ph: "",
    water_availability: "",
    season: "summer",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const cropCategories = [
    "rice", "maize", "chickpea", "kidneybeans", "pigeonpeas",
    "mothbeans", "mungbean", "blackgram", "lentil",
    "watermelon", "muskmelon", "cotton", "jute"
  ];

  const cropInfo = {
    rice: { emoji: "🍚", season: "Rainy/Summer", desc: "High water requirement crop" },
    maize: { emoji: "🌽", season: "Summer", desc: "Moderate water requirement" },
    chickpea: { emoji: "🫘", season: "Winter", desc: "Low water requirement" },
    kidneybeans: { emoji: "🫘", season: "Winter", desc: "Moderate water requirement" },
    pigeonpeas: { emoji: "🫛", season: "Rainy", desc: "Low water requirement" },
    mothbeans: { emoji: "🫘", season: "Summer", desc: "Drought resistant crop" },
    mungbean: { emoji: "🫛", season: "Summer", desc: "Short duration crop" },
    blackgram: { emoji: "🫘", season: "Rainy", desc: "Good for soil health" },
    lentil: { emoji: "🫘", season: "Winter", desc: "Cold tolerant crop" },
    watermelon: { emoji: "🍉", season: "Summer", desc: "High water requirement" },
    muskmelon: { emoji: "🍈", season: "Summer", desc: "Warm season crop" },
    cotton: { emoji: "🌾", season: "Summer", desc: "Cash crop with moderate water need" },
    jute: { emoji: "🌾", season: "Rainy", desc: "Fiber crop with high water need" }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData);
      let cropIndex = parseInt(res.data.predicted_crop);
      if (isNaN(cropIndex)) {
        setPrediction(res.data.predicted_crop);
      } else {
        setPrediction(cropCategories[cropIndex]);
      }
    } catch (err) {
      console.error(err);
      setPrediction("error");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      temperature: "",
      humidity: "",
      ph: "",
      water_availability: "",
      season: "summer",
    });
    setPrediction(null);
  };

  return (
    <div className="predict-page">
      {/* Header */}
      <header className="predict-header">
        <div className="predict-header-content">
          <div className="header-logo">
            <div className="header-logo-icon">🌱</div>
            <div>
              <h1>AgriPredict</h1>
              <p>Smart Farming Solutions</p>
            </div>
          </div>
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back to Home
          </button>
        </div>
      </header>

      <div className="predict-container">
        <div className="predict-wrapper">
          {/* Left Side - Info Section */}
          <div className="info-section">
            <div className="info-card">
              <h2>🌾 Crop Prediction System</h2>
              <p className="info-subtitle">
                Get AI-powered crop recommendations based on your environmental conditions
              </p>

              <div className="info-steps">
                <h3>📋 How to Use:</h3>
                <div className="step-item">
                  <span className="step-num">1</span>
                  <div>
                    <strong>Temperature</strong>
                    <small>Enter average temperature in °C</small>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-num">2</span>
                  <div>
                    <strong>Humidity</strong>
                    <small>Enter humidity percentage (0-100)</small>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-num">3</span>
                  <div>
                    <strong>Soil pH</strong>
                    <small>Enter pH level (typically 4-9)</small>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-num">4</span>
                  <div>
                    <strong>Water Availability</strong>
                    <small>Enter water availability in mm</small>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-num">5</span>
                  <div>
                    <strong>Season</strong>
                    <small>Select the current growing season</small>
                  </div>
                </div>
              </div>

              <div className="info-tips">
                <h3>💡 Tips:</h3>
                <ul>
                  <li>Ensure all measurements are accurate</li>
                  <li>Use average values for best results</li>
                  <li>Consider local climate patterns</li>
                  <li>Consult agricultural experts for guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="form-section">
            <div className="form-card">
              <div className="form-header">
                <h2>Enter Your Data</h2>
                <p>Fill in the details below to get crop recommendations</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="temperature">
                    <span className="label-icon">🌡️</span>
                    Temperature (°C)
                  </label>
                  <input
                    type="number"
                    id="temperature"
                    name="temperature"
                    placeholder="e.g., 25"
                    value={formData.temperature}
                    onChange={handleChange}
                    step="0.1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="humidity">
                    <span className="label-icon">💧</span>
                    Humidity (%)
                  </label>
                  <input
                    type="number"
                    id="humidity"
                    name="humidity"
                    placeholder="e.g., 65"
                    value={formData.humidity}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    step="0.1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ph">
                    <span className="label-icon">📊</span>
                    Soil pH Level
                  </label>
                  <input
                    type="number"
                    id="ph"
                    name="ph"
                    placeholder="e.g., 6.5"
                    value={formData.ph}
                    onChange={handleChange}
                    min="0"
                    max="14"
                    step="0.1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="water_availability">
                    <span className="label-icon">💦</span>
                    Water Availability (mm)
                  </label>
                  <input
                    type="number"
                    id="water_availability"
                    name="water_availability"
                    placeholder="e.g., 200"
                    value={formData.water_availability}
                    onChange={handleChange}
                    step="0.1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="season">
                    <span className="label-icon">🌤️</span>
                    Season
                  </label>
                  <select
                    id="season"
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                  >
                    <option value="summer">☀️ Summer</option>
                    <option value="rainy">🌧️ Rainy</option>
                    <option value="winter">❄️ Winter</option>
                  </select>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        🔍 Predict Crop
                      </>
                    )}
                  </button>
                  <button type="button" className="reset-btn" onClick={handleReset}>
                    🔄 Reset
                  </button>
                </div>
              </form>

              {/* Results Section */}
              {prediction && prediction !== "error" && (
                <div className="result-card">
                  <div className="result-header">
                    <span className="result-icon">✅</span>
                    <h3>Prediction Complete!</h3>
                  </div>
                  <div className="result-content">
                    <div className="crop-display">
                      <span className="crop-emoji">{cropInfo[prediction]?.emoji || "🌱"}</span>
                      <h2 className="crop-name">{prediction}</h2>
                    </div>
                    {cropInfo[prediction] && (
                      <div className="crop-details">
                        <div className="detail-item">
                          <strong>Best Season:</strong>
                          <span>{formData.season}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Description:</strong>
                          <span>{cropInfo[prediction].desc}</span>
                        </div>
                      </div>
                    )}
                    <div className="result-actions">
                      <button className="action-btn primary">
                        📖 Learn More
                      </button>
                      <button className="action-btn secondary" onClick={handleReset}>
                        🔄 Try Again
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {prediction === "error" && (
                <div className="error-card">
                  <span className="error-icon">⚠️</span>
                  <h3>Prediction Failed</h3>
                  <p>Unable to connect to prediction service. Please try again later.</p>
                  <button className="retry-btn" onClick={handleReset}>
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="predict-footer">
        <div className="footer-content">
          <p>© 2025 AgriPredict. Empowering farmers with AI-driven insights.</p>
        </div>
      </footer>
    </div>
  );
}

export default CropPredict;