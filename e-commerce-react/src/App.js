import { Home, Login, Signup } from "./pages"
import { NavBar } from "./components/layout/navBar"
import { Footer } from "./components/layout/footer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      {/* <Signup/> */}
      {/* <Login/> */}
      <Footer />
    </div>
  );
}

export default App;
