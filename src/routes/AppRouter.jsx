import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Carrito from '../pages/cart/Carrito'
import Checkout from '../pages/checkout'
import Layout from '../components/layout'
import Home from '../pages/home'
import Nosotros from '../pages/nosotros'
import Contacto from '../pages/contacto'
import NotFound from '../pages/notFound'

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:idCategoria" element={<Home />} />
          <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route exact path="/carrito/" element={<Carrito />} />
          <Route exact path="/nosotros/" element={<Nosotros />} />
          <Route exact path="/contacto/" element={<Contacto />} />
          <Route exact path="/checkout/" element={<Checkout />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
