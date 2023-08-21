const dataDal= require('../DALs/dataDal');

const getData = async (req, res) => {
    const data = await dataDal.getData();
    return data
};
console.log("servise " + getData());

module.exports = {getData}