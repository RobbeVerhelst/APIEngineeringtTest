import mysql from "mysql2/promise";

export default class Search {
  constructor() {
    this.connection = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "Delta",
      database: "Delta",
    });
  }

  logSearch = async (userId, assetId) => {
    let sql = ` 
    insert into searches values (${userId}, ${assetId}, now());`;
    return await this.connection.execute(sql).then((res) => {
      console.log("Search added");
      return res[0];
    });
  };

  getTrendingSearches = async () => {
    const sql = ` 
    select assetId from (
      select distinct assetId, userId
      from searches 
      where date > DATE_SUB(CURDATE(), INTERVAL 1 DAY)
      ) as distinctSearches
    group by assetId
    order by count(assetId) desc
    `;

    return await this.connection.execute(sql).then((res) => {
      console.log("Trending searches received");
      return res[0];
    });
  };

  getRecentSearches = async (userId) => {
    const sql = ` 
    select assetId from searches where userId = ${userId} order by date limit 100`;
    return await this.connection.execute(sql).then((res) => {
      console.log("recent searches received");
      return res[0];
    });
  };

  createTable = async () => {
    const sql = ` 
    create table searches ( 
      userId int,
      assetId int,
      date datetime
    );`;
    return await this.connection.execute(sql).then((res) => {
      console.log("table added");
      return res[0];
    });
  };

  deleteTable = async () => {
    const sql = ` 
    drop table searches`;
    return await this.connection.execute(sql).then((res) => {
      console.log("table deleted");
      return res[0];
    });
  };
}
