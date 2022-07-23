'use strict'

const Asset =  (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    codAsset: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    qttAssets: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
  },{
    tableName: 'Assets',
    timestamps: false
  });

  return Asset;
};

module.exports = Asset;