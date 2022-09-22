import { useState } from "react";
import { CartContext } from "./CartContext";
export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    
    const addToCard = (item, quantity) => {
        if (isInCart(item.id)){
            alert ('ya esta en el carrito')
        } else {
            setCart([...cart, {...item,quantity}])
        }
        console.log('cart', [...cart, {...item,quantity}]);
    };
    const isInCart =(id) => {
        return cart.some((item) => item.id === id);
    };
    const clear = () =>{
        setCart([]);
    }
    return(
        <CartContext.Provider value={{cart, addToCard}}>
            {children}
        </CartContext.Provider>
    )
}