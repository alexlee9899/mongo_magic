import requests
from services.config import get_recatcha_token

url = 'https://www.google.com/recaptcha/api/siteverify'
def get_approval(public_token):
  try:
    private_token = get_recatcha_token()
    result = requests.post(url, data={'secret': private_token, 'response': public_token})
    return result.json()["success"]
  except:
    return False
  
  
def 