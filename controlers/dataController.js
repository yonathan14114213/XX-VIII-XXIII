const dataService = require('../services/dataService');
let data
const getData = async(req, res) => {
    console.log('controller 2');
    await data = dataService.getData()
    await res.json(data)
};
console.log('controller 1');
module.exports = {getData}