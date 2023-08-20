const express = require('express');
const dataController = require('./controlers/dataController');
const router = express.Router();
router.get('/allData', async (req,res)=>{
    console.log('router 2')
    await res.send(dataController.getData());
});
console.log('router 1');


router.get('/:id',(req, res)=>{
    res.send(dataByIdController.getData());
});

router.post('/',(req, res)=>{
    res.send(createNewProductController.setData());
});

module.exports = router;