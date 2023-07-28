## Welcome to Scrapper Web App!

This web app takes query as an input and in turn returns data from top 5 websites.
This a web scrapping project.

Technologies Used: Node.JS, Express.JS, etc.<br>
APIs Used: Google Custom Search API, Scrapping Bee API

### How to Set up the project Locally!
**STEP 1:** clone the repository
<br/>

**STEP 2:** Install all the npm packages
```
npm install
```

**STEP 3:** Change Enviornment Variables with yours <br> 
    a. Create a .env file <br>
    b. Store the following variables
<br>

> **CUSTOM_SEARCH_API_KEY**  <br>
Above API Key you can generate on - [console.cloud.google.com](https://console.cloud.google.com/apis/library/customsearch.googleapis.com) <br>

> **SEARCH_ENGINE_ID** <br>
You can get on - [console.cloud.google.com](https://console.cloud.google.com/apis/library/customsearch.googleapis.com)<br>

> **SCRAPPING_BEE_API_KEY** <br>
Above API Key you can generate on - [ScrappingBee](https://www.scrapingbee.com/#pricing)


**STEP 4:** Start the server 
<br>

```
nodemon app.js
```

**STEP 5:** Congratulations! Now go to localhost:3000 and checkout!

<br>

### Problems I faced while creating the webapp
1. Removing unwanted Javascript from the fetched data
2. Extracting only the required text from the response so generated

### Future Ideas & Optimizations for Implementation in the project
1. Error Handling - Currently it does not render data from PDF files
2. Time Optimization - It takes good amount of time to get all the data together
3. UI - Building an understandable and representable UI

***Please let me know If you have any feedback for me on LinkedIn - [theanantchoubey](https://www.linkedin.com/in/theanantchoubey/)***