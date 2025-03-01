import requests
import datetime

url = "https://api.coingecko.com/api/v3/coins/solana/market_chart"
params = {
    "vs_currency": "usd",  # You can change to another currency
    "days": "1"           # Fetch data for the past 30 days
}

response = requests.get(url, params=params)
data = response.json()

# Display the prices for the last 30 days
for price in data['prices']:
    print(f"Timestamp: {datetime.datetime.fromtimestamp(price[0]/1000, datetime.UTC)}, Price: ${price[1]}")