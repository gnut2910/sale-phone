import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    brand_id: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
  },
  { tableName: "products", timestamps: false }
);

export const Brand = sequelize.define(
  "Brand",
  {
    brand_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "brand", timestamps: false }
);
