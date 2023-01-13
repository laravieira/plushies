import { Model, ModelAttributes, Sequelize } from 'sequelize';

class MySQLEngine {
  private static sequelise: Sequelize = new Sequelize(
    {
      host: process.env.MYSQL_HOST || '',
      port: parseInt(process.env.MYSQL_PORT || ''),
      password: process.env.MYSQL_PASSWORD || '',
      username: process.env.MYSQL_USER || '',
      database: process.env.MYSQL_DATABASE || '',
      dialect: 'mysql'
    }
  );

  static connect(): Promise<Sequelize> {
    return MySQLEngine.sequelise
      .authenticate()
      .then(() => MySQLEngine.sequelise);
  }

  static define(name: string, attributes: ModelAttributes<Model<any, any>>) {
    return MySQLEngine.sequelise.define(name, attributes);
  }

  static close(): Promise<void> {
    return MySQLEngine.sequelise.close();
  }

  static sync(): Promise<Sequelize> {
    return MySQLEngine.sequelise.sync();
  }
}

export default MySQLEngine;