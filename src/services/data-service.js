const Data = require('../models/data');

class DataService {
  get = async (login) => {
    const data = await Data.find({ login }, (err) => console.log(err));
    console.log('data: ', data);
    if (!data.length) {
      const emptyData = {
        login,
        successExam: 0,
        unsuccessExam: 0,
        questions: [],
      };
      Data.create(emptyData);
      return emptyData;
    }

    return data;
  };

  update = async (data, login) => {
    console.log('post data: ', data);
    await Data.updateOne({ login }, data);
    // await Data.updateMany({ login }, data);

    return { message: 'db updated' };
  };
}

module.exports = new DataService();
