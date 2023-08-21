const dataDal= require('../DALs/dataByIdDal');
const getData = async (id) => {
const data = await dataDal.getData(id);
return data;
};
module.exports = {getData}