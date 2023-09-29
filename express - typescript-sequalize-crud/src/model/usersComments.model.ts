import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequalize.config';

class UserComment extends Model {
  public id!: number;
  public user_id!: number;
  public comment_id!: number;
}

UserComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    comment_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize, 
    modelName: 'UserComment', 
    tableName: 'users_comments',
  }
);

export default UserComment;
