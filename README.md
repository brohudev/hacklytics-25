# 🐾 Purrfect Odds (Working Title)

Welcome to **Purrfect Odds**, a hackathon project that combines NFL betting data with player performance, injury, and other datasets to calculate the **chance of hitting a spread**. This project is powered by Python (Flask), MongoDB, and React.js, and it’s all tied together with some cat-tastic vibes 🐱.

---

## 📖 Project Overview

**Purrfect Odds** is designed to:
1. Fetch **NFL betting data** (spreads, odds) from a sportsbook API.
2. Process datasets like **injury reports**, **player performance**, and more.
3. Calculate a **weighted score** that predicts the likelihood of hitting a spread.
4. Display everything in a clean and responsive web interface.

---

## 🛠️ Tech Stack

- **Backend**: Flask (Python) + MongoDB for storing and processing data.
- **Frontend**: React.js with Tailwind CSS for styling.
- **APIs**: Sportsbook API for betting data, plus external APIs for player stats and injuries.

---

## 🚀 Features

- 🏈 Fetch real-time spreads and odds for NFL games.
- 📊 Calculate weighted scores based on datasets like:
  - Player injuries
  - Performance stats
  - Team strategy
  - Nutrition/health data
- 💻 User-friendly interface to display spreads, odds, and confidence scores.

---

## 📂 File Structure

Here’s how the project is organized:

```
project/
├── backend/
│   ├── app.py                  # Main Flask app
│   ├── services/
│   │   ├── api_handler.py      # Handles external API calls
│   │   ├── db_handler.py       # Handles database interactions
│   │   ├── score_calculator.py # Implements weighted score logic
│   ├── models/
│   │   ├── game_model.py       # Database schema for games
│   │   ├── player_model.py     # Database schema for players
│   ├── config/
│       ├── settings.py         # Configuration settings (API keys, DB URI)
├── frontend/
│   ├── src/
│   │   ├── components/         # React components (GameCard, GameList, etc.)
│   │   ├── hooks/              # Custom hooks for API calls
│       App.js                  # Main app entry point
```

---

## 🐾 How It Works

1. **Backend**:
   - Fetches data from the sportsbook API (e.g., spreads, odds).
   - Pulls additional datasets (e.g., injuries, performance).
   - Stores everything in MongoDB.
   - Calculates a weighted score using normalized inputs.

2. **Frontend**:
   - Displays games in a dashboard with spreads, odds, and scores.
   - Allows filtering/sorting by spread size or confidence level.
   - Shows detailed breakdowns of weighted scores.

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

---

## 🧪 Testing

### Backend Tests:
- Use `pytest` to test individual services like `api_handler` and `score_calculator`.

### Frontend Tests:
- Use Jest and React Testing Library for unit testing components.
- Use Cypress for end-to-end testing.

---

## 🌟 To-Do List

Here are some next steps we’d love to tackle:
1. Add real-time updates for spreads and odds using WebSockets.
2. Integrate more advanced player metrics (e.g., EPA or win probability).
3. Improve UI/UX with animations or advanced filtering options.

---

## 🐱 Meet the Team

We’re a group of four hackathon enthusiasts who love cats and code!  
Feel free to reach out if you have questions or want to collaborate! 😺

---

## 📃 License

This project is open-source under the MIT License.