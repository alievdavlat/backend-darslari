import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'aliev2002',
  database: 'n124',
  host: 'localhost',
  port: 5432, 
  define: {
    timestamps: false, 
  },
});


;(async function () {
  try {
    await sequelize.authenticate();
    console.log('db connection');
  } catch (error) {
    console.log('db error, ', error);
  }
})();




export default sequelize;
