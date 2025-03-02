import requests
import datetime

# Define the date range
start_date = datetime.datetime(2021, 4, 16)
end_date = datetime.datetime(2021, 4, 21)

# Convert to Unix timestamps (seconds)
start_timestamp = int(start_date.timestamp())
end_timestamp = int(end_date.timestamp())

# CryptoCompare API URL for hourly data
url = "https://min-api.cryptocompare.com/data/v2/histohour"

# Your API key from CryptoCompare
api_key = "b8be1d12368dea6b7fbbdd766110e077de2e510613a394adbc1b52a8d8980bad"

params = {
    "fsym": "DOGE",           # Cryptocurrency symbol (Dogecoin)
    "tsym": "USD",            # Target currency (USD)
    "toTs": end_timestamp,    # End timestamp
    "limit": 120,             # Enough hours to cover our date range (5 days = 120 hours)
    "api_key": api_key        # API key
}

response = requests.get(url, params=params)
data = response.json()

# Filter data for our specific date range
filtered_data = [price for price in data['Data']['Data'] 
                if start_timestamp <= price['time'] <= end_timestamp]

# Display the prices for the given date range
for price in filtered_data:
    timestamp = datetime.datetime.fromtimestamp(price['time'], tz=datetime.timezone.utc)
    date_str = timestamp.strftime("%Y-%m-%d %H:%M:%S UTC")
    print(f"Date: {date_str}, Open: ${price['open']:.4f}, High: ${price['high']:.4f}, Low: ${price['low']:.4f}, Close: ${price['close']:.4f}")