'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RappelTraitement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RappelTraitement.belongsTo(models.Traitement, {
        foreignKey: 'id',
        as: 'traitement',
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      });
      });
    }
  };
  RappelTraitement.init({
    dateRappel: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RappelTraitement',
  });
  return RappelTraitement;
};