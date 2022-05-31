const AbstractManager = require("./AbstractManager");

class ImmoManager extends AbstractManager {
  static table = "immo";

  insert(immo) {
    return this.connection.query(
      `insert into ${ImmoManager.table} (title) values (?)`,
      [immo.title]
    );
  }

  update(immo) {
    return this.connection.query(
      `update ${ImmoManager.table} set title = ? where id = ?`,
      [immo.title, immo.id]
    );
  }
}

module.exports = ImmoManager;
