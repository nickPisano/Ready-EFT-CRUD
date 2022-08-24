const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Group extends Model {}

Group.init(
  {
    // Group ID
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Host User ID
    userhost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // Host Username
    userhost_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //User 2 ID&Name
    user2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      allowNull: true,
    },
    user2_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //User 3 ID&Name
    user3_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      allowNull: true,
    },
    user3_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //User 4 ID&Name
    user4_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      allowNull: true,
    },
    user4_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //User 5 ID&Name
    user5_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      allowNull: true,
    },
    user5_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    abandonuser: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Group",
  }
);

module.exports = Group;
