# from flask import Flask, jsonify, request
# from services.api_handler import fetch_odds
# from services.db_handler import save_game, get_games, get_game_details
# from services.score_calculator import calculate_score

# app = Flask(__name__)

# # Route to fetch games from the database
# @app.route('/get-games', methods=['GET'])
# def get_games_route():
#     games = get_games()
#     return jsonify(games)

# # Route to fetch detailed game info (including weighted score breakdown)
# @app.route('/get-game-details/<game_id>', methods=['GET'])
# def get_game_details_route(game_id):
#     details = get_game_details(game_id)
#     return jsonify(details)

# # Route to calculate weighted score for a specific game
# @app.route('/calculate-score/<game_id>', methods=['POST'])
# def calculate_score_route(game_id):
#     score = calculate_score(game_id)
#     return jsonify({"weighted_score": score})

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello from Purrfect Odds!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)