const dataDal= require('../DALs/dataDal');
const getData = async (req, res) => {
    console.log('server 2');
    const data = await dataDal.getData();
    await return data;
};
console.log('server 1');
module.exports = {getData}