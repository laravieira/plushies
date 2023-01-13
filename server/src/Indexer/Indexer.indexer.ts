import MySQLEngine from '../Engine/MySQL.engine';
import Plushie from '../Models/Plushie.model';

class Indexer {
  static execute = () => {
    MySQLEngine.connect()
      .then(() => Plushie)
      .then(() => MySQLEngine.sync())
      .catch(console.error);
  }
}

export default Indexer;