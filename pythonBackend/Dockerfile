# Użyj obrazu bazowego Pythona
FROM python:3.8-slim

# Skopiuj aktualny katalog roboczy do kontenera w ścieżce /app
COPY . /app

# Ustaw katalog roboczy na /app
WORKDIR /app

# Zainstaluj zależności bezpośrednio
RUN pip install --no-cache-dir flask flask-cors

# Zdefiniuj komendę, która ma być uruchamiana podczas startu kontenera
CMD [ "python", "app.py" ]
