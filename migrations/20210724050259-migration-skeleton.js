"use strict";

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.createTable("Person", {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    });
  },

  down: async(queryInterface, Sequelize) => {
    return queryInterface.dropTable("Person");
  },
};