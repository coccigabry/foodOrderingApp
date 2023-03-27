import mongoose from "mongoose"


const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        max: 60,
    },
    address: {
        type: String,
        required: true,
        max: 120,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    paymentMethod: {
        type: Number,
        reuired: true,
        default: 0,
    },
}, { timestamps: true })


export default mongoose.models.Order ||
    mongoose.model("Order", OrderSchema)