import { Sequelize  } from "sequelize";

const sequalize = new Sequelize({
  dialect:'postgres',
  host:'localhost',
  port:5432,
  username:'postgres',
  password:'aliev2002',
  database:'n124'
})

export default sequalize