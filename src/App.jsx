
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
      <h1>E-Commerce</h1>
      <NavBar />
      <hr />
      <ItemListContainer greeting="Bienvenido a la tienda de Compushop" />
    </>
  )
}

export default App
