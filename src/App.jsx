
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from "./components/Carrito";
import CartContextProvider from "./Context/CartContext"





function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <>
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                element={<ItemListContainer greetings=" Item list container" />}
              />
              <Route
                exact
                path="/productos/:idCategoria"
                element={<ItemListContainer greetings=" Item list container" />}
              />
              <Route
                exact
                path="/detalle/:id"
                element={<ItemDetailContainer />}
              />
              <Route exact
               path="/carrito"
              element={<Carrito />} />
            </Routes>
          </>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
