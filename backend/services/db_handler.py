from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["bets_db"]

def save_game(game_data):
    db.games.insert_one(game_data)

def get_games():
    return list(db.games.find({}, {"_id": 0}))

def get_game_details(game_id):
    return db.games.find_one({"game_id": game_id}, {"_id": 0})
