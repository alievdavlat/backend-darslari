import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequalize.config';

class Comment extends Model {
  public id!: number;
  public content!: string;
  public user_id!: number;
  public msg!: string;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    msg: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, 
    modelName: 'Comment', 
  }
);

export default Comment;
