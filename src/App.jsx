
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import WhishList from './Pages/WhishList'

function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/whishlist" element={<WhishList/>} />
      <Route path="/cart" element={<Cart/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
