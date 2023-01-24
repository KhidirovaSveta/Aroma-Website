const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(cors())
app.use(bodyParser.json());


const {Schema} = mongoose;

const productSchema = new Schema({
    img: {type: String, require: true},
    type: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true}
},
{timestamps: true}
)
const Products = mongoose.model("shop", productSchema);

app.get('/', (req, res) => {
    Products.find({}, (error, docs) => {
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message: error})
        }
    })
})
app.get('/:id', (req, res) => {
    const {id} = req.params
    Products.findById(id, (error, doc) => {
        if(!error){
            res.send(doc)
        }else{
            res.status(500).json({message: error})
        }
    })
})

app.delete('/:id', (req, res) => {
    const {id} = req.params
    Products.findByIdAndDelete(id, (error) => {
        if(!error){
            res.send("succsess")
        }else{
            res.status(404).json({message: error})
        }
    })
})



app.post('/', (req, res) => {
    let newProducts = new Products ({
        img: req.body.img,
        type: req.body.type,
        name: req.body.name,
        price: req.body.price
    })
    newProducts.save();
    res.send("succsess")
})

mongoose.set(`strictQuery`, false);

mongoose.connect(`mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/?retryWrites=true&w=majority`, (error) => {
    if(!error){
        app.listen(port, () => {
          console.log(`Example app listening on port  http://localhost:${port}`)
        })
    }
})