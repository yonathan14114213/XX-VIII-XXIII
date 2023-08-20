const Data = require('C:\Users\yonathan\.vscode\project2\app.js');
const getData = (req, res) => {
    const data = app.getData();
    const id = req.params.id;
    for(let i = 0;i<data.length;i++){
        if(data[i].id===id){
            return data[i];
        }
    }
};
module.exports = {getData}