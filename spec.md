## **Project Overview**
The goal is to create a system that:
1. Fetches betting data (e.g., spreads, odds) from a sportsbook API.
2. Processes NFL-related datasets (injury, nutrition, performance, etc.) to calculate a **weighted score** representing the chance of hitting a spread.
3. Displays this information in a user-friendly frontend interface.

---

## **High-Level Architecture**

### **Tech Stack**
1. **Backend**:
   - Framework: Flask (Python).
   - Database: MongoDB.
   - Services:
     - API handler for sportsbook and external data APIs.
     - Database handler for storing and retrieving data.
     - Score calculation service.

2. **Frontend**:
   - Framework: React.js.
   - Styling: Tailwind CSS or Material-UI.
   - State Management: React hooks (`useState`, `useEffect`).

3. **Deployment**:
   - Backend: Host on cloudflare workers.
   - Frontend: Deploy using cloudflare pages.

---

## **Backend Specification**

### **Folder Structure**
```
backend/
├── app.py                  # Main Flask app
├── services/
│   ├── api_handler.py      # Handles external API calls
│   ├── db_handler.py       # Handles database interactions
│   ├── score_calculator.py # Implements weighted score logic
├── models/
│   ├── game_model.py       # Database schema for games
│   ├── player_model.py     # Database schema for players
├── config/
│   ├── settings.py         # Configuration settings (API keys, DB URI)
├── requirements.txt        # Python dependencies
```

### **Endpoints**
1. `/get-games` (GET):
   - Fetch all games with spreads, odds, and weighted scores from the database.

2. `/get-game-details/` (GET):
   - Fetch detailed data for a specific game, including weighted score breakdown.

3. `/calculate-score/` (POST):
   - Calculate and return the weighted score for a specific game.

4. `/fetch-odds` (POST):
   - Trigger fetching of spreads and odds from the sportsbook API.

---

### **Data Handling**
1. **Sportsbook Data**:
   - Input: Spread, odds, game metadata (teams, date/time).
   - Source: Sportsbook API.
   
2. **NFL Data**:
   - Injury reports: Player status, severity/type.
   - Performance stats: Historical averages, matchup-specific trends.
   - Nutrition/health metrics: Recovery/fatigue data.
   
3. **Database Schema**:
```json
{
  "game_id": "12345",
  "teams": { "home": "UGA", "away": "GT" },
  "spread": { "home": "-7", "away": "+6.5" },
  "odds": { "home": "-110", "away": "-110" },
  "injury_data": [
    { "player_name": "John Doe", "status": "Questionable", "severity": 0.7 }
  ],
  "performance_data": [
    { "player_name": "John Doe", "passing_yards_avg": 250 }
  ],
  "nutrition_data": { "recovery_score": 85 },
  "weighted_score": 75
}
```

---

### **Error Handling**
1. Catch errors during external API calls (e.g., failed requests, invalid responses).
2. Validate incoming data before saving to the database.
3. Return appropriate HTTP status codes and error messages for frontend consumption.

---

## **Frontend Specification**

### **Folder Structure**
```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── FilterBar.js
│   │   ├── GameCard.js
│   │   ├── GameList.js
│   │   ├── GameDetailsModal.js
│   │   ├── Footer.js
│   ├── hooks/
│       ├── useFetchGames.js      # Custom hook to fetch games from API
│       App.js                    # Main app entry point
├── public/
│       index.html                # Root HTML file
├── package.json                  # Dependencies and scripts for React app
```

### **Components**
1. `Header`:
   - Displays app name/logo and navigation bar.

2. `FilterBar`:
   - Dropdowns/buttons to filter/sort games by spread size, confidence, etc.

3. `GameCard`:
   - Displays game details (teams, spread/odds, weighted score).

4. `GameList`:
   - Maps over all games and renders `GameCard` components.

5. `GameDetailsModal` (Optional):
   - Shows detailed breakdown of the weighted score for a selected game.

6. `Footer`:
   - Links to data sources and hackathon team credits.

---

### **API Hooks**
1. `useFetchGames.js`:
```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/get-games')
            .then((response) => {
                setGames(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching games:", error);
                setLoading(false);
            });
    }, []);

    return { games, loading };
};
```

2. `useFetchGameDetails.js`:
```javascript
import { useState } from 'react';
import axios from 'axios';

export const useFetchGameDetails = (gameId) => {
    const [details, setDetails] = useState(null);

    const fetchDetails = () => {
        axios.get(`/get-game-details/${gameId}`)
            .then((response) => {
                setDetails(response.data);
            })
            .catch((error) => {
                console.error("Error fetching game details:", error);
            });
    };

    return { details, fetchDetails };
};
```

## **Next Steps**
- Set up the repository with the provided folder structure.
- Implement backend services (`api_handler`, `db_handler`, etc.).
- Build out React components (`GameCard`, `GameList`, etc.).
- Test each part incrementally as you develop it!

Citations:
[1] https://pplx-res.cloudinary.com/image/upload/v1740233877/user_uploads/KgbLHvgzexYNCtm/image.jpg