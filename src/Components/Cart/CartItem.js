import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux';

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();

    return(
        
        <div>
          <p>{dishes.name}</p>  
          <p>{cartItem.quantity} porttion(s)</p>
          <p>Price: ${dishes.price * cartItem.quantity}</p>
          <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
          <img className="icon" alt="cart" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
          </span> 
        </div>
    )
}
export default CartItem;