import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Checkout from "./pages/checkout/Checkout"
import Confirmation from "./pages/checkout/Confirmation"
import Navbar from "./components/Global/Navbar"
import Home from "./pages/Home/Home"
import ItemDetails from "./pages/itemDetails/ItemDetails"
import CartMenu from "./components/Global/CartMenu"

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}
function App() {
    return (
        <BrowserRouter>
        <Navbar/>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/item/:id' element={<ItemDetails/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/checkout/success' element={<Confirmation/>}/>
            </Routes>
            <CartMenu/>
        </BrowserRouter>
    )
}

export default App
