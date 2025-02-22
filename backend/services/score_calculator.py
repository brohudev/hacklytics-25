def calculate_score(game_data):
    # Example weights for calculation
    weights = {
        "injury": 0.4,
        "performance": 0.3,
        "nutrition": 0.2,
        "strategy": 0.1,
    }

    # Normalize and compute weighted score (example logic)
    injury_score = game_data.get("injury", 0) * weights["injury"]
    performance_score = game_data.get("performance", 0) * weights["performance"]
    nutrition_score = game_data.get("nutrition", 0) * weights["nutrition"]
    strategy_score = game_data.get("strategy", 0) * weights["strategy"]

    return round(injury_score + performance_score + nutrition_score + strategy_score, 2)
