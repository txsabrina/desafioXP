'use strict'

const Client =  (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    codClient: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: { type: DataTypes.INTEGER, defaultValue: 0 }
  },{
    tableName: 'Clients',
    timestamps: false
  });

  return Client;
};

module.exports = Client;