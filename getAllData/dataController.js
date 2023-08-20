const userService = require('./dataService');
const getData = (req, res) => {
const data = dataService.getData();
res.json(data);
};
module.exports = {getData}