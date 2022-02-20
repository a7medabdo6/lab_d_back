"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.hasMany(models.ExternalReport, {
        as: "externalReports",
        foreignKey: "customerId",
      });
      customer.belongsTo(models.User, {
        as: "user",
        foreignKey: "createdBy",
      });
    }
  }
  customer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username_ar: DataTypes.STRING,
      username_en: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth: DataTypes.STRING,
      passport_Number: DataTypes.STRING,
      passport_expiry: DataTypes.STRING,

      identity_Number: DataTypes.STRING,
      nation: DataTypes.STRING,
      location: DataTypes.STRING,
      IssueCode: DataTypes.STRING,
      ApprovedCode: DataTypes.STRING,
      customer_id: DataTypes.STRING,
      password: DataTypes.STRING,

      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User", // Can be both a string representing the table name or a Sequelize model
          key: "id",
        },
      },
      test: {
        type: DataTypes.STRING,
      },
      collectDate: DataTypes.STRING,
      reportDate: DataTypes.STRING,
      unit: {
        type: DataTypes.ENUM({
          values: ["N/A", "N/L", "IU/Ml"],
        }),
      },
      branch: DataTypes.STRING,
      border: {
        type: DataTypes.ENUM({
          values: ["Positive", "Negative"],
        }),
      },
      result: {
        type: DataTypes.ENUM({
          values: ["Positive", "Negative"],
        }),
      },

      customer_report: DataTypes.STRING,

      customer_image: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "customers",
      modelName: "Customer",
    }
  );
  return customer;
};
