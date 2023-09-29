
import sequelize from "../config/sequalize.config";
import User from "./users.model";


sequelize.sync({alter:true, force: false})



export { 
  User
}