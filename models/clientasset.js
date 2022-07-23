'use strict'

const ClientAsset =  (sequelize, DataTypes) => {
  const ClientAsset = sequelize.define('ClientAsset', {
    codClient: {type: DataTypes.INTEGER, primaryKey: true},
    codAsset: {type: DataTypes.INTEGER, primaryKey: true},
    qttAssets: DataTypes.INTEGER
  },{
    tableName: 'ClientAssets',
    timestamps: false
  });

  ClientAsset.associate = (models) => {
    models.Client.belongsToMany(models.Asset, {
      as: 'Asset',
      through: ClientAsset,
      foreignKey: 'codAsset',
    });
    models.Asset.belongsToMany(models.Client, {
      as: 'Client',
      through: ClientAsset,
      foreignKey: 'codClient',
    });

  };
  return ClientAsset;
};

module.exports = ClientAsset;