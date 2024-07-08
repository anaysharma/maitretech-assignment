import { Modal } from "antd"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/ShoppingCartProvider"
import { Link } from "react-router-dom";

function Navbar() {
    const { cart, setCart, addToCart, removeFromCart } = useContext(CartContext);

    const [cartModalVisibility, setCartModalVisibility] = useState(false);

    return (
        <>
            <div className="p-6 bg-indigo-800 text-white flex items-center justify-between">
                <Link to="/" className="font-medium flex gap-2 items-center text-lg">
                    <i className="ri-restaurant-fill"></i>
                    <span>Food's Restaurant</span>
                </Link>
                {cart.length ? <button className="relative" onClick={() => setCartModalVisibility(true)}>
                    <i className="ri-shopping-cart-fill"></i>
                    <span className="bg-yellow-200 text-black rounded-full text-xs absolute -top-1 -right-3 h-4 w-4">{cart.length}</span>
                </button> : null}
            </div>

            <Modal
                centered
                open={cartModalVisibility}
                title="Order Summary"
                onCancel={() => setCartModalVisibility(false)}
                footer={[
                    <Link
                        className="rounded text-white bg-indigo-800 px-4 py-2"
                        to="/checkout"
                        onClick={() => {
                            setCartModalVisibility(false);
                            setCart([])
                        }}>
                        Save and Checkout
                    </Link>,
                    <button className="text-indigo-800 ml-4" onClick={() => setCartModalVisibility(false)}>Cancel</button>
                ]}
            >
                <ul className="grid gap-3">
                    {cart.map(item => <li key={item.name} className="grid grid-cols-3 items-center">
                        <span>{item.name} :</span>
                        <span>{item.count}</span>
                        <div className="flex gap-2 h-min ml-auto">
                            <button className="px-6 py-1 rounded bg-indigo-800 text-white shadow" onClick={() => addToCart(item)}><i className="ri-add-line"></i></button>
                            <button className="px-6 py-1 rounded text-white bg-rose-600 shadow" onClick={() => removeFromCart(item)}><i className="ri-subtract-line"></i></button>
                        </div>
                    </li>)}
                </ul>
                <span>Total (INR) : {cart.reduce((acc, val) => acc + val.price * val.count, 0)}</span>
            </Modal>
        </>
    )
}

export default Navbar