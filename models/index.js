const Sequelize = require('sequelize')
const db ={}

connection = {
  dialect: "mysql",
  dialectModel: "mysql2",
  database: "sequelizedatabase",
  username: "sequelizeUser",
  password: "saiifk0803",
  host: "localhost"
}

// connect to db
const sequelize = new Sequelize(connection);

db.sequelize = sequelize
db.users = require("./user.js")(sequelize, Sequelize);
sequelize.sync({ alter: true})
module.exports = db