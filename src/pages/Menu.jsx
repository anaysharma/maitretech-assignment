import { useContext } from "react"
import { menuItems } from "../data/menuItems"
import { CartContext } from "../contexts/ShoppingCartProvider"

function Menu() {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-10">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
        {menuItems.map(item =>
          <div key={item.name} className="grid rounded-md shadow-md bg-white overflow-hidden border">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="px-4 py-2 grid gap-2">
              <span className="text-lg">{item.name}</span>
              <span>Price: {item.price}</span>
            </div>
            <div className="flex gap-2 p-2 h-min mt-auto">
              <button className="px-6 py-2 rounded bg-indigo-800 text-white shadow" onClick={() => addToCart(item)}><i className="ri-add-line"></i></button>
              <button className="px-6 py-2 rounded text-indigo-800 bg-gray-200 shadow" onClick={() => removeFromCart(item)}><i className="ri-subtract-line"></i></button>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Menu