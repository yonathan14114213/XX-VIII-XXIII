const express = require('express')
const router = require('./routes')
const app = express()
const data = [{
    id: 0,
    title: 'water',
    description:'2L of miniral-water from RAMAT HA GOLAN',
    price: 9,
    category: 'drinks',
    image: app.use(express.static('./publicity/water-img.jfif')),
    quantity: 28,
    rating:{
        rate: 7,
        count:549
    }
},{
    id: 1,
    title: 'apple-juce',
    description: '1.5L of 100% fruit-made juce from the switest apples of POLAND',
    price: 18,
    category: 'drinks',
    image:app.use(express.static('./publicity/apple-img.jfif')),
    quantity: 43,
    rating: {
        rate:8,
        count:87
    }
}]
function data(){
    return data;
}
app.use('/api', router)

app.listen(3000, () => {
console.log(`Server is running`);
})