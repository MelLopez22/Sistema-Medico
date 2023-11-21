const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_datos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'datos',
        key: 'id'
      }
    },
    id_statud: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'statud',
        key: 'id'
      }
    },
    url_logo:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empresas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "empresas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
