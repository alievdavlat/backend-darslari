import { Sequelize } from 'sequelize'


export const sequelize = new Sequelize({
  dialect: 'postgres',
  host:'localhost',
  port:'5432',
  password:'aliev2002',
  database:'n124',
  username:'postgres'
});



(async function () {
  try {
    await sequelize.authenticate();
    console.log('db connection');
  } catch (error) {
    console.log('db error, ', error.message);
  }
})();


export default sequelize;



