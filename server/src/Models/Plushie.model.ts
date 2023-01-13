import MySQLEngine from '../Engine/MySQL.engine';
import { DataTypes } from 'sequelize';

export type PlushieType = {
  id: number,
  name: string,
  image: string,
  color: string,
  height: number,
  created: Date
}

const Plushie = MySQLEngine.define('plushie', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  height: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

export default Plushie;