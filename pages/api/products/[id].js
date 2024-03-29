import Product from "@/models/Product"
import dbConnect from "@/utils/mongoConnect"


export default async function handler(req, res) {

    const { method, query: { id } } = req

    await dbConnect()

    if (method === 'GET') {
        try {
            const product = await Product.findById(id)
            res.status(201).json(product)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if (method === 'PUT') {
        try {
            // some code here
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if (method === 'DELETE') {
        try {
            await Product.findByIdAndDelete(id)
            res.status(201).json('deleted')
        } catch (err) {
            res.status(500).json(err)
        }
    }
}