
from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        # Ensure "features" exist
        if "features" not in data:
            return jsonify({"error": "Missing 'features' in request"}), 400

        for i, value in enumerate(data["features"]):
            if value == "" or value is None:
                return jsonify({"error": f"Feature at index {i} is empty"}), 400

        input_features = np.array(data["features"], dtype=float).reshape(1, -1)

        # Make prediction
        prediction = model.predict(input_features)

        return jsonify({"predicted_y": prediction.tolist()})

    except ValueError as e:
        return jsonify({"error": f"Invalid input: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
