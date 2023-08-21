const data = require('../data.json');
const SetData = async (id, title, description, price, category, image, quantity, rate, count) => {
    const a = {
        id: id,
        title: title,
        description: description,
        price: price,
        category: category,
        image: image,
        quantity:quantity,
        rating:{
            rate: rate,
            count: count
        }
    };
    data.push(a)
    return(data)
};
module.exports = {SetData}