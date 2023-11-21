"use strict";

require("dotenv").config();
const Sequelize = require("sequelize");
const process = require("process");
const initModels = require("./models/init-models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/config.json")[env];
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/medico`,
  {
    logging: false, 
    native: false, 
  }   
);


sequelize.models = initModels.initModels(sequelize);
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
