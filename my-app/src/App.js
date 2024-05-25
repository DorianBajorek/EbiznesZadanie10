import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    // Function to fetch message from backend
    const fetchMessageFromBackend = async () => {
      try {
        // Wysyłanie żądania POST na adres URL backendu
        const response = await axios.post('http://127.0.0.1:5000/send-message', {
          message: 'Hello from frontend!'
        });
        setBackendMessage(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };

    // Wywołanie funkcji do pobrania wiadomości przy montowaniu komponentu
    fetchMessageFromBackend();
  }, []);

  return (
    <div className="App">
      <h1>Frontend app</h1>
      <p>Message from backend: {backendMessage}</p>
    </div>
  );
}

export default App;
