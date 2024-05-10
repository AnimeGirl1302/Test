const MysqlConn = require("../mysql/mysql.connection");
const helper = require('../utils/helper');

class TestController {
  async getShortenedUrl(url) {
    try {
      let encodedUrl = '';
      while (true) {
        encodedUrl = helper.generateRandomUrl();
        const dbResult = await MysqlConn.executeQuery(`SELECT * FROM url_mappings WHERE encoded_url = '${encodedUrl}'`);
  
        // found unique URL
        if (!dbResult || !dbResult.length) {
          break;
        }
      }

      await MysqlConn.executeQuery(`INSERT INTO url_mappings SET original_url = '${url}', encoded_url = '${encodedUrl}'`);
      return encodedUrl;
    } catch(err) {
      console.log(err);
    }
  }

  async getOriginalUrl(url) {
    try {
      const dbResult = await MysqlConn.executeQuery(`SELECT * FROM url_mappings WHERE encoded_url = '${url}'`);

      console.log('db', dbResult);
      if (dbResult.length) {
        return dbResult[0].original_url;
      }
      else {
        return null;
      }
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new TestController();
