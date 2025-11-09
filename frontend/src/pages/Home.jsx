import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header>
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">🌱</div>
            <div className="logo-text">
              <h1>AgriPredict</h1>
              <p>Smart Farming Solutions</p>
            </div>
          </div>
          <nav>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="badge">AI-Powered Agriculture</span>
              <h2>
                Grow Smarter with <span className="highlight">Intelligent</span> Crop
                Predictions
              </h2>
              <p>
                Maximize your harvest with data-driven crop recommendations tailored to
                your specific soil and climate conditions. Our AI analyzes multiple
                environmental factors to suggest the best crops for optimal yield.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary" onClick={() => navigate("/predict")}>
                  Start Prediction →
                </button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>

            <div className="hero-image">
              <div className="analysis-card">
                <div className="card-inner">
                  <div className="card-header">
                    <span>Crop Analysis</span>
                    <span className="status-badge">Active</span>
                  </div>

                  <div className="parameter-item">
                    <div className="param-icon">☀️</div>
                    <div className="param-info">
                      <strong>Temperature</strong>
                      <small>Average local temperature</small>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="parameter-item">
                    <div className="param-icon">💧</div>
                    <div className="param-info">
                      <strong>Humidity</strong>
                      <small>Moisture in the air</small>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div className="parameter-item">
                    <div className="param-icon">📊</div>
                    <div className="param-info">
                      <strong>Soil pH</strong>
                      <small>Acidity/alkalinity level</small>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "92%" }}></div>
                    </div>
                  </div>

                  <div className="parameter-item">
                    <div className="param-icon">💧</div>
                    <div className="param-info">
                      <strong>Water Availability</strong>
                      <small>Irrigation resources</small>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "78%" }}></div>
                    </div>
                  </div>

                  <div className="parameter-item">
                    <div className="param-icon">🌬️</div>
                    <div className="param-info">
                      <strong>Season</strong>
                      <small>Current growing season</small>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose AgriPredict?</h2>
            <p>
              Our platform combines cutting-edge technology with agricultural expertise
              to deliver accurate, actionable insights.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Analysis</h3>
              <p>Advanced machine learning algorithms analyze your soil and weather data</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Data-Driven Insights</h3>
              <p>Get accurate crop recommendations based on real-time environmental factors</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Farmer-Friendly</h3>
              <p>Simple interface designed for farmers of all technical backgrounds</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Results</h3>
              <p>Helping farmers optimize their crop yield and profitability</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple steps to get your crop recommendation</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Enter Data</h3>
              <p>Input your soil and weather parameters</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>AI Analysis</h3>
              <p>Our algorithm processes your information</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p>Receive personalized crop recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-icon">🌱</div>
                <span style={{ color: "white", fontSize: "20px", fontWeight: 700 }}>
                  AgriPredict
                </span>
              </div>
              <p style={{ fontSize: "14px" }}>
                Empowering farmers with intelligent crop predictions for sustainable
                agriculture.
              </p>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 AgriPredict. All rights reserved. Made with 💚 for farmers worldwide.</p>
          </div>
        
      </footer>
    </div>
  );
}