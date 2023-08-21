const dataDal= require('../createNewProductDAL.JS');
const setData = async (id, title, description, price, category, image, quantity, rate, count) => {
const data = await dataDal.setData(id, title, description, price, category, image, quantity, rate, count);
return data;
};
module.exports = {setData}