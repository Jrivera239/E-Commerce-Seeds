const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },

  {
    sequelize,
    modelName: "tag",
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Tag;
