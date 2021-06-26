'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Treatment.belongsTo(models.Pet);
    }

  };
  Treatment.init({
    petID: DataTypes.INTEGER,
    medication: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    timesPerDay: DataTypes.INTEGER,
    statut: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};