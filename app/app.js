import express from "express";
import Search from "./search.js";

const app = express();
const search = new Search();
console.log(await search.createTable());

await search.logSearch(2, 3);
await search.logSearch(6, 1);
await search.logSearch(6, 1);
await search.logSearch(6, 1);
await search.logSearch(6, 1);
await search.logSearch(6, 1);

await search.logSearch(5, 8);
await search.logSearch(5, 3);
await search.logSearch(5, 3);
await search.logSearch(5, 3);

const recentSearches = await search.getRecentSearches(5);
console.log(recentSearches);
const trendingSearches = await search.getTrendingSearches();
console.log(trendingSearches);

console.log(await search.deleteTable());
app.listen(3000);
