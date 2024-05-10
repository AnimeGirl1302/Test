

class MySQlConn {
  async executeQuery(query) {
    const result = await global.connection.execute(query);
    return result[0];
  }
}

module.exports = new MySQlConn();
