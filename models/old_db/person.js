const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isBetaMember: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'person',
    timestamps: false
  });
};
