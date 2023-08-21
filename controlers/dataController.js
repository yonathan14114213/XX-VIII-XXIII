const dataService = require('../services/dataService');

const getData =  async (req, res) => {
    const data =  await dataService.getData();
    console.log(data);
    res.send(res.json(data));
  
};
console.log("cont " + getData());

module.exports = {getData}