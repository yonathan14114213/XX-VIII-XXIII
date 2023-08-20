const Data = require('../data');
const getData = async (req, res) => {
    console.log('dal 2');
    const data = await Data.getData();
    return data;
};
console.log('dal 1');
module.exports = {getData}