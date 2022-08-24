const User = require("./User");
const Raid = require("./raid");
const Group = require("./group");


Group.hasMany(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Group.belongsTo(Raid, {
  foreignKey: "group_id",
  onDelete: "CASCADE",
});

Raid.hasMany(Group, {
  foreignKey: "group_id",
  onDelete: "CASCADE",
});

Raid.hasMany(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.belongsTo(Group, {
  foreignKey: "group_id",
  onDelete: "CASCADE",
});

module.exports = { User, Raid, Group };
