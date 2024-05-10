const TestController = require('../controllers/testController');

class TestModule {
  async getEncodedUrl(req, res, next) {
    try {
      const url = req.query.url;
      const result = await TestController.getShortenedUrl(url);
      return res.status(200).send({data: result});
      } catch (err) {
        console.error(err);
        return res.status(500).send({msg: 'Something went wrong'});
      }
  }

  async getOriginalUrl(req, res, next) {
    try {
      const url = req.query.url;
      const result = await TestController.getOriginalUrl(url);
      return res.status(200).send({data: result});
      } catch (err) {
        console.error(error);
        return res.status(500).send({msg: 'Something went wrong'});
      }
  }
}

module.exports = new TestModule();