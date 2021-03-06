/* eslint-disable linebreak-style */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Pet);

      Appointment.hasOne(models.Professional);
// eslint-disable-next-line linebreak-style
    }
  };
  Appointment.init({
    dateRendezVous: DataTypes.DATE,
    petID: DataTypes.INTEGER,
    professionnelId: DataTypes.INTEGER,
    utilisateurId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};