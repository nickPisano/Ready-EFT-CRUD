const sequelize = require('../config/connection');
const { User, Raid, Group } = require('../models');

const userData = require('./userData.json');
const raidData = require('./raidData.json');
const groupData = require('./groupData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Raid.bulkCreate(raidData, {
  //  individualHooks: true,
  //  returning: true,
  });

  await Group.bulkCreate(groupData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();