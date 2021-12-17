
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
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
          <Route 
            exact
            path="detalle" 
            element={<ItemCount />}
            />
          
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App
