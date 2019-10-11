import CartActionTypes from  './cart.types' ;
import {addQuentyToItem,removeCartItem,clearCart} from './cart.utils'



const INITIAL_STATE = {
hidden:true,
cartItems :[]
}


const cartReducer = (state =INITIAL_STATE,action)=>{
   switch (action.type) {
            case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
...state ,hidden:!state.hidden
            }
            case CartActionTypes.ADD_CART_ITEM:
            return {
               ...state , cartItems:addQuentyToItem(state.cartItems,action.payload)
            }
            case CartActionTypes.CLEAR_CART_ITEM:
            return{
               ...state,cartItems:state.cartItems.filter(item=>item.id != action.payload.id)
            }
            case CartActionTypes.REMOVE_CART_ITEM:
            return{
               ...state ,cartItems:removeCartItem(state.cartItems,action.payload)
            }
            case CartActionTypes.CLEAR_CART:
            return{
               ...state ,  cartItems:[]
            }
            
            default:
            return  state
   } 
}

export default cartReducer ;