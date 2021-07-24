"use strict";

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      firstName: "Divy",
      lastName: "Motisariya",
      email: "email@gmail.com",
    }, ]);
  },

  down: async(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};