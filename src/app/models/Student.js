const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula: Sequelize.INTEGER,
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

module.exports = Student;
