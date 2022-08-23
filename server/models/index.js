const User = require("./User");
const Raid = require("./raid");
const Group = require("./group");

User.hasMany(Raid, {
  foreignKey: "user_id",
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

module.exports = { User, Raid, Group };
