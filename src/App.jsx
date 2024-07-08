import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShoppingCartProvider from "./contexts/ShoppingCartProvider"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import Layout from "./components/Layout"
import Menu from "./pages/Menu"

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
