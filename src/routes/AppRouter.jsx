
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Carrito from "../pages/cart/Carrito"
import Checkout from '../components/Checkout/Checkout'
import Nosotros from '../pages/Nosotros'
import Layout from '../components/layout'
import Home from "../pages/Home"

function AppRouter() {
  return (

    <Router>
	    <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/:idCategoria' element={<Home/>} />
          <Route exact path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route exact path='/carrito/' element={<Carrito />} />
          <Route exact path='/nosotros/' element={<Nosotros/>} />
          <Route exact path='/checkout/' element={<Checkout/>} />
          <Route exact path='*' element={<h1>page not found</h1>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
