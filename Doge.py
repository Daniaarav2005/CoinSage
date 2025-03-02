import requests
import pytz
import datetime
import random


# Initial investment
initial_cash = 1000  # Starting with $1000
cash = initial_cash   # Cash available
dogecoin_owned = 0    # How much DOGE we own
trade_probability = 0.5  # 50% chance to trade (buy/sell)

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

# # Display the prices for the given date range
# for price in filtered_data:
#     timestamp = datetime.datetime.fromtimestamp(price['time'], pytz.timezone('Asia/Kolkata'))
#     date_str = timestamp.strftime("%Y-%m-%d %H:%M:%S UTC")
#     print(f"Date: {date_str}, Open: ${price['open']:.4f}, High: ${price['high']:.4f}, Low: ${price['low']:.4f}, Close: ${price['close']:.4f}")

# Simulate trading
for price in filtered_data:
    timestamp = datetime.datetime.fromtimestamp(price['time'], pytz.timezone('Asia/Kolkata'))
    date_str = timestamp.strftime("%Y-%m-%d %H:%M:%S UTC")
    open_price = price['open']
    
    action = random.choice(["buy", "sell", "hold"]) if random.random() < trade_probability else "hold"

    if action == "buy" and cash > 0:
        amount_to_buy = cash / open_price  # Buy as much as we can with the available cash
        dogecoin_owned += amount_to_buy
        cash = 0
        print(f"{date_str} - BUY: Bought {amount_to_buy:.4f} DOGE at ${open_price:.4f}")

    elif action == "sell" and dogecoin_owned > 0:
        cash += dogecoin_owned * open_price  # Sell all DOGE at current price
        print(f"{date_str} - SELL: Sold {dogecoin_owned:.4f} DOGE at ${open_price:.4f}, Cash: ${cash:.2f}")
        dogecoin_owned = 0

    else:
        print(f"{date_str} - HOLD: No action taken")

# Final investment summary
final_value = cash + (dogecoin_owned * filtered_data[-1]['close'])  # Cash + DOGE at final price
profit_or_loss = final_value - initial_cash

print("\n==== Investment Summary ====")
print(f"Initial Investment: ${initial_cash}")
print(f"Final Value: ${final_value:.2f}")
print(f"Net {'Profit' if profit_or_loss > 0 else 'Loss'}: ${profit_or_loss:.2f}")