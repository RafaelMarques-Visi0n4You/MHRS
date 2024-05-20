const { Sequelize }= require('sequelize');

const sequelize = new Sequelize(
  'mhrs',
  'mhrsweb',
  'E3%f9+8yLv_3',
  {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;