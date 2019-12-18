const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Ocurrency extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: Sequelize.STRING
        },
        data: {
          type: Sequelize.DATE
        }
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
    this.belongsTo(models.Student, { foreignKey: "student_id" });
  }
}

module.exports = Ocurrency;
