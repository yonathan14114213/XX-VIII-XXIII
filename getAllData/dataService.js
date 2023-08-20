const userDal= require('./dataDal');
const getData = (req, res) => {
const data = dataDal.getData();
return data;
};
module.exports = {getData}