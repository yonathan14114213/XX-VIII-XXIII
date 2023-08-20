const dataDal= require('../DALs/dataByIdDal');
const getData = (req, res) => {
const data = dataDal.getData();
return data;
};
module.exports = {getData}