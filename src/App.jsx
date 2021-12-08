
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemCount from "./components/ItemCount/ItemCount";


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
