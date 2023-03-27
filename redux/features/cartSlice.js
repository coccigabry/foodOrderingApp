const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity
        },
        clearCart: state => initialState,
    }
})


export const { addProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer