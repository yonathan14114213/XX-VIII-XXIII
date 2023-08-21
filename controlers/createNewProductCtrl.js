const dataService = require('../createNewProductServer.js');

const setData =  async (req, res) => {
        id = req.body.id,
        title = req.body.title,
        description = req.body.description,
        price = req.body.price,
        category = req.body.category,
        image = req.body.image,
        quantity = req.body.quantity,
        rate = req.body.rating.rate,
        count = req.body.rating.count
    const data =  await dataService.setData(id, title, description, price, category, image, quantity, rate, count);
    console.log(data);
    res.send(res.json(data));
  
};
console.log("cont " + setData());

module.exports = {setData}