"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username_ar: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nation: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      passport_expiry: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      birth: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      password: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      passport_Number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      identity_Number: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      customer_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      test: {
        type: Sequelize.STRING,

        allowNull: false,
      },

      collectDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      reportDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      IssueCode: {
        type: Sequelize.STRING,
      },
      ApprovedCode: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.ENUM({
          values: ["N/A", "N/L", "IU/Ml"],
        }),
        allowNull: false,
      },
      branch: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      border: {
        type: Sequelize.ENUM({
          values: ["Positive", "Negative"],
        }),
        allowNull: false,
      },
      result: {
        type: Sequelize.ENUM({
          values: ["Positive", "Negative"],
        }),
        allowNull: false,
      },

      customer_report: {
        allowNull: false,

        type: Sequelize.STRING,
      },

      customer_image: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("customers", {
      type: "foreign key",
      fields: ["createdBy"],
      name: "createdBy",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("customers");
  },
};
