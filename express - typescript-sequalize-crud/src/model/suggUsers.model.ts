import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequalize.config';

class SuggUser extends Model {
  public id!: number;
  public user_id!: number;
  public suggestion_id!: number;
}

SuggUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    suggestion_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize, 
    modelName: 'SuggUser', 
    tableName: 'sugg_users', 
  }
);

export default SuggUser;
