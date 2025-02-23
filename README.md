## 📖 Project Overview: BayeSurgeon

Welcome to **BayeSurgeon**, a hackathon project on Breath Cancer Prediction and Dataset Visualization that combines age, gender, surgeon type, and other professional factors to predict the **chances of survivial** based on patients' health data. We aim to make clinicians' life easier! By providing a data-driven prediction of the patient's status, clinical strategies can be improved and optimized. This project is powered by Python (Flask), React.js, and Machine Learing Strategies, and it’s all tied together with some cat-tastic vibes 🐱.

---


## 🛠️ Tech Stack

- **Backend**: Flask (Python) for handling API call and model predictions.
- **Frontend**: React.js with Tailwind CSS for styling.
- **Machine Learning Model**: Support Vector Machine trained on BRCA data.

---

## 🚀 Features

- 📊 Calculate patients'chance of survival based on data like:
  - Age, Gender
  - Surgeon Type, Tumor Stage
- 💻 User-friendly interface to display correlation of breast cancer survival rates and related factors based on BRCA dataset.

---

## 📂 File Structure

Here’s how the project is organized:

```
project/
├── backend/
│   ├── app.py                  # Main Flask app
│   ├── model.pkl               # Trained Machine Learning Model on the Breast Cancer Dataset
├── frontend/
│   ├── src/
│   │   ├── components/         # React components (Input Form, Dashboard Charts, etc.) && POST call to the trained model
│       App.js                  # Main app entry point
```

---

## ⚙️ Installation Guide

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/purrfect-odds.git
cd purrfect-odds
```

### 2. Backend Setup
Navigate to the `backend/` folder:
```bash
cd backend/
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Start the Flask server:
```bash
python app.py
```

### 3. Frontend Setup
Navigate to the `frontend/` folder:
```bash
cd ../frontend/
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`.

## 📃 License

This project is open-source under the MIT License.
