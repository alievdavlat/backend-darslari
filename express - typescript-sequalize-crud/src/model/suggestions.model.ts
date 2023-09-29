import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequalize.config';

class Suggestion extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public status!: string;
}

Suggestion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, 
    modelName: 'Suggestion',
  }
);

export default Suggestion;
