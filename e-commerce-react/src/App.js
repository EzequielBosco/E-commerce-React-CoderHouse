import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Catalogue, Home, Login, Signup } from "./pages"
import { NavBar } from "./components/layout/navBar"
import { Footer } from "./components/layout/footer"
import { ProductDetail } from "./components/common";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/catalogue" element={<Catalogue/>} /> 
        <Route path="/catalogue/:id" element={<ProductDetail/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/login" element={<Login/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
