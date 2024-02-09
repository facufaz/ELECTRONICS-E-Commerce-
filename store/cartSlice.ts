import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface cartState {
  cart: [{id: number, name: string, price:number, image: string, itemCount: number }]
}

// Define the initial state using that type
const initialState: cartState = {
  cart: [{id: 0, name:'', price: 0, image:'', itemCount: 0  }],
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<any>) => {
        state.cart.push(action.payload);
      },
    startNewCart: (state) => {
      state.cart.shift()
    },
    clearCart: (state) => {
      state.cart = [{id: 0, name:'', price: 0, image:'', itemCount: 0  }]
    },
  },
})

export const { addToCart, startNewCart, clearCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer