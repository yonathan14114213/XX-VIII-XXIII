const express = require('express');
const dataController = require('./controlers/dataController');
const router = express.Router();

router.get('/allData',dataController.getData);



router.get('/:id',(req, res)=>{
    const id = req.params.id
    res.send(dataByIdController.getData(id));
});

router.post('/',(req, res)=>{
    res.send(createNewProductCtrl.setData());
});

module.exports = router;