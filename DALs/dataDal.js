const { data } = require('../data');
const getData = async (req, res) => {
    console.log('dal 2');
    const ans = await Promise.resolve(data);
    return ans;
};
console.log('dal 1');
module.exports = {getData}