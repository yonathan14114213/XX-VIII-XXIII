const dataService = require('../services/dataService');

const getData = async(req, res) => {
    console.log('controller 2');
    const data = await dataService.getData()
    res.json(data)
};
console.log('controller 1');
module.exports = {getData}