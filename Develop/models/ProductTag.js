const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(

  {
    id: {

      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    product_id: {

      type: DataTypes.INTEGER,
      references: {
      key: "id", 
      model: "product",
      },
    },

    tag_id: {
    
      type: DataTypes.INTEGER,
      references: {
      key: "id",
      model: "tag",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "product_tag",
    underscored: true,
  
  }
);

module.exports = ProductTag;
