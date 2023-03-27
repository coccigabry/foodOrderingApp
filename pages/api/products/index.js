import Product from "@/models/Product"
import dbConnect from "@/utils/mongoConnect"


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    if (method === 'GET') {
        try {
            const products = await Product.find()
            res.status(201).json(products)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if (method === 'POST') {
        try {
            const product = await Product.create(req.body)
            res.status(201).json(product)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}