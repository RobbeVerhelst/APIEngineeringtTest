# Delta engineering Test
An API for logging searches, getting the most trending searches and getting the last 100 searches of a user.

## Installations
Install all the packages
```bash
npm install
```

## Usage 
First run the docker compose file to
```bash
docker-compose up
```
Then run the server.js
```bash
cd ./app
node server.js
```
Now use any of these api requests

curl:
```bash
curl --location --request GET 'http://localhost:3000/trendingSearches'

curl --location --request POST 'http://localhost:3000/logSearch' \
--data-raw '{
    "userId":3,
    "assetId":8
}'

curl --location --request POST 'http://localhost:3000/recentSearches' \
--data-raw '{
    "userId":5
}'
```

