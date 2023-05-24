import { Categories, Home, Login, Signup } from "./pages"
import { NavBar } from "./components/layout/navBar"
import { ItemListContainer } from "./components/common/containers/itemListContainer/itemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la web"/>
      <Home/>
      {/* <Signup/>
      <Login/>
      <Categories/> */}
    </div>
  );
}

export default App;
