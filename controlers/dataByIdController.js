const dataService = require('../services/dataByIdService');
const getData = async (id, res) => {
const data = await dataService.getData(id);
res.send(res.json(data));
};
module.exports = {getData}