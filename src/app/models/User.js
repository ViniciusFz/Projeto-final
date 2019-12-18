const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    //
  }
}

module.exports = User;
