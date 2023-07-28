const express = require("express");
const https = require("https");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const fs = require("fs");
const scrapingbee = require("scrapingbee");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    text1: "Text 1 from Url 1 will be shown here",
    text2: "Text 2 from Url 2 will be shown here",
    text3: "Text 3 from Url 3 will be shown here",
    text4: "Text 4 from Url 4 will be shown here",
    text5: "Text 5 from Url 5 will be shown here",
  });
});

app.post("/", async (req, res) => {
  const query = req.body.query;
  const queryURL = `https://www.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}&q=${query}`;
  //   let bodyText;
  https.get(queryURL, async (response) => {
    var status = response.statusCode;
    let rawData = "";
    response.on("data", async (data) => {
      rawData += data;
    });
    response.on("end", async () => {
      console.log(rawData);
      if (status === 200) {
        const scrappedSearchData = JSON.parse(rawData);
        const url1 = scrappedSearchData.items[0].link;
        const url2 = scrappedSearchData.items[1].link;
        const url3 = scrappedSearchData.items[2].link;
        const url4 = scrappedSearchData.items[3].link;
        const url5 = scrappedSearchData.items[4].link;

        function get(url1) {
          var client = new scrapingbee.ScrapingBeeClient(
            `${process.env.SCRAPPING_BEE_API_KEY}`
          );
          var response = client.get({
            url: url1,
            params: {
              render_js: "False",
            },
          });

          return response;
        }

        const bodyText = await get(url1)
          .then(function (response) {
            const $ = cheerio.load(response.data);
            const text = $("body").text();
            return text;
          })
          .catch((e) => console.log("A problem occurs in 1 : " + e.response.data));
        const bodyText2 = await get(url2)
          .then(function (response) {
            const $ = cheerio.load(response.data);
            const text = $("body").text();
            return text;
          })
          .catch((e) => console.log("A problem occurs in 2 : " + e.response.data));
        const bodyText3 = await get(url3)
          .then(function (response) {
            const $ = cheerio.load(response.data);
            const text = $("body").text();
            return text;
          })
          .catch((e) => console.log("A problem occurs in 3 : " + e.response.data));
        const bodyText4 = await get(url4)
          .then(function (response) {
            const $ = cheerio.load(response.data);
            const text = $("body").text();
            return text;
          })
          .catch((e) => console.log("A problem occurs in 4 : " + e.response.data));
        const bodyText5 = await get(url5)
          .then(function (response) {
            const $ = cheerio.load(response.data);
            const text = $("body").text();
            return text;
          })
          .catch((e) => console.log("A problem occurs in 5 : " + e.response.data));
        res.render("index", {
          text1: bodyText,
          text2: bodyText2,
          text3: bodyText3,
          text4: bodyText4,
          text5: bodyText5,
        });
      } else {
        console.log("Error!");
        res.redirect("/");
      }
    });
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
