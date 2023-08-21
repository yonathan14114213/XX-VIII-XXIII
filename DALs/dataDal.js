const json = require('jsonfile');


const  getData = async () => {
    const data = await getJson('./data.json');
    return data;
};


async function getJson (jsonfile){
    const data = await json.readFile(jsonfile)
    return data
}
module.exports = {getData}
