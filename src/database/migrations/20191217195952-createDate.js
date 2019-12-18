"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("ocurrencies", "data", Sequelize.DATE);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("data");
  }
};
