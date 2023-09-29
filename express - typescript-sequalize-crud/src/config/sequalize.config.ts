import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'n124',
  username: 'postgres',
  password: '****',
  host: 'localhost',
  port: 5432, 
  dialect: 'postgres', 
});





;(async function () {
  try {
    await sequelize.authenticate();
    console.log('db connection');
  } catch (error:any) {
    console.log('db error, ', error.message);
  }
})();

export default sequelize;
