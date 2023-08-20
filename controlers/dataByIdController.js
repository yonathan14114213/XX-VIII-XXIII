const dataService = require('../services/dataByIdService');
const getData = (req, res) => {
const data = dataService.getData();
res.json(data);
};
module.exports = {getData}