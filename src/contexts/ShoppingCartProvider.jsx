import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

function ShoppingCartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const prevIndex = cart.findIndex(item => item.name == product.name);
        const copy = JSON.parse(JSON.stringify(cart));
        if (prevIndex !== -1) {
            copy[prevIndex].count = copy[prevIndex].count + 1;
        } else {
            copy.push({...product, count: 1})
        }
        setCart(copy);
    }

    const removeFromCart = (product) => {
        const prevIndex = cart.findIndex(item => item.name == product.name);
        const copy = JSON.parse(JSON.stringify(cart));
        if (prevIndex !== -1) {
            const prevItem = copy[prevIndex];
            if (prevItem.count > 1) {
                prevItem.count = prevItem.count - 1;
            } else {
                copy.splice(prevIndex, 1);
            }
            setCart(copy);
        }
    }
    
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider