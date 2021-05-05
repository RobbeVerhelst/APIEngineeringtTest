import express from "express";
import Search from "./search.js";

const search = new Search();
const app = express();

app.listen(3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("Setting up db...");
//console.log(await search.createTable());

app.get("/trendingSearches", (req, res) => {
  search.getTrendingSearches().then((results) => {
    res.send(results);
  });
});

app.post("/recentSearches", (req, res) => {
  search.getRecentSearches(req.body.userId).then((results) => {
    res.send(results);
  });
});

app.post("/logSearch", async (req, res) => {
  search.logSearch(req.body.userId, req.body.assetId).then((results) => {
    res.send(results);
  });
});
