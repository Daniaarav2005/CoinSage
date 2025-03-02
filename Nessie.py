import requests
import json

apiKey = '988d4079758af55722760a9e97f1365c'

url = 'http://api.reimaginebanking.com/customers'
customer = {
  "first_name": "string",
  "last_name": "string",
  "address": {
    "street_number": "string",
    "street_name": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  }
}
# Create a Savings Account
response = requests.post( 
	url, 
	data=json.dumps(customer),
	headers={'content-type':'application/json'},
)

if response.status_code == 201:
	print('account created')