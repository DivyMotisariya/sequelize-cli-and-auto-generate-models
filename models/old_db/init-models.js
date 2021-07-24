var DataTypes = require("sequelize").DataTypes;
var _migration_meta = require("./migration_meta");
var _migration_metabackup = require("./migration_metabackup");
var _person = require("./person");
var _tests = require("./tests");
var _users = require("./users");

function initModels(sequelize) {
  var migration_meta = _migration_meta(sequelize, DataTypes);
  var migration_metabackup = _migration_metabackup(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var tests = _tests(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    migration_meta,
    migration_metabackup,
    person,
    tests,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
