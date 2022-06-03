const dataService = require('../services/data-service');

class DataController {
  get = async (req, res) => {
    try {
      if (!req.query.login)
        return res.status(401).json('401 user not unauthorized');

      const login = req.query.login.toLowerCase().trim();
      console.log('login : [get]', login);

      const data = await dataService.get(login);
      return res.json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  update = async (req, res) => {
    try {
      if (!req.query.login)
        return res.status(401).json('401 user not unauthorized');

      console.log('login : [update]', login);
      const login = req.query.login.toLowerCase().trim();
      const message = await dataService.update(req.body, login);

      return res.json(message);
    } catch (e) {
      return res.status(500).json(e);
    }
  };
}

module.exports = new DataController();
