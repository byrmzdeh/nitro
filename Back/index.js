import express from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'
const app = express()
const port = 7000


app.use(express.json())
app.use(cors())

const productSchema = new Schema({
    icon: String,
    name: String,
    price: String,
    category: String
});
const productModel = mongoose.model('product', productSchema);

app.get('/', async (req, res) => {
    try {
        const product = await productModel.find({})
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})


app.post('/', async (req, res) => {
    try {
        const { icon, name, price, category } = req.body
        const product = new productModel({ icon, name, price, category })
        await product.save()
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})


app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { icon, name, price, category } = req.body
        const product = await productModel.findByIdAndUpdate(id, { icon, name, price, category })
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})


mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})