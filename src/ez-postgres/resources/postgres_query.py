import json
import boto3
import os
import psycopg2

def getCredentials(secret_name):
  credential = {}
  
  secret_name = os.environ['SECRET_NAME']
  region_name = os.environ['AWS_REGION']
  
  client = boto3.client(
    service_name='secretsmanager',
    region_name=region_name
  )
  
  get_secret_value_response = client.get_secret_value(
    SecretId=secret_name
  )
  
  secret = json.loads(get_secret_value_response['SecretString'])
  
  credential['username'] = secret['username']
  credential['password'] = secret['password']
  
  return credential

def handler(event, context):
  credential = getCredentials( event['secret_name'] )
  connection = psycopg2.connect(user=credential['username'], password=credential['password'], host=event['host'], database=event['db'])
  cursor = connection.cursor()
  for query in event['query']:
    cursor.execute(query)
  results = cursor.fetchall()
  cursor.close()
  connection.commit()
  
  return results