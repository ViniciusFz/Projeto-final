const Sequelize = require("sequelize");
const dbConf = require("../config/database");
const User = require("../app/models/User");
const Student = require("../app/models/Student");
const Ocurrency = require("../app/models/Ocurrency");

const models = [User, Student, Ocurrency];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConf);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();
