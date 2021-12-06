
import ItemCount from '../../../prueba/myApp/src/components/ItemCount/ItemCount';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
  <>
      <NavBar/>
      <ItemListContainer greetings=" Item list container"/>
     <ItemCount/>
      </>
  );
}

export default App
