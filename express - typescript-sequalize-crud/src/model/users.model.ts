import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequalize.config';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public status!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, 
    modelName: 'User',
  }
);

export default User;
