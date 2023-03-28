import Order from "@/models/Order"
import dbConnect from "@/utils/mongoConnect"


export default async function handler(req, res) {

    const { method, query: { id } } = req

    await dbConnect()

    if (method === 'GET') {
        try {
            const order = await Order.findById(id)
            res.status(201).json(order)
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
            await Order.findByIdAndDelete(id)
            res.status(201).json('deleted')
        } catch (err) {
            res.status(500).json(err)
        }
    }
}