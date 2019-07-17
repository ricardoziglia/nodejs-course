const ObjectId = require('mongodb').ObjectId;
const getDb = require('../util/database').getDb;

var _collection = 'users';

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this._id = id ? new ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    return db.collection(_collection).insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection(_collection)
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;
