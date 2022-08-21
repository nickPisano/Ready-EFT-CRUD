const User = require("./User");
const Advice = require("./advice");
const Raid = require("./raid");
const Group = require("./group");
const GroupTimer = require("./grouptimer");

User.hasMany(Raid, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Advice, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Group.hasMany(GroupTimer, {
  foreignKey: "group_id",
});

GroupTimer.belongsTo(Group, {
  foreignKey: "group_id",
  onDelete: "CASCADE",
});

Group.hasMany(User, {
  foreignKey: "group_id",
});

Group.belongsTo(Raid, {
  foreignKey: "raid_id",
});

Raid.hasMany(Group, {
  foreignKey: "raid_id",
});

Raid.belongsTo(User, {
  foreignKey: "user_id",
});

Advice.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Advice, Raid, Group, GroupTimer };
