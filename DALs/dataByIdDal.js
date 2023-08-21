const data = require('../data.json');
const getData = async (id) => {
    for(let i = 0; i<data.length; i++){
        if(data[i].id===id){
            return data[i];
        }
    }
};
module.exports = {getData}