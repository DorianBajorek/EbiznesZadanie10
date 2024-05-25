from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)  # Dodaj ten wiersz, aby włączyć obsługę CORS

@app.route('/send-message', methods=['POST'])
def send_message():
    # Receive message from the frontend
    data = request.json
    message = data.get('message')

    # Prepare response
    response = {
        "status": "success",
        "message": f"Message received from frontend: {message}"
    }

    # Return response as JSON
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
