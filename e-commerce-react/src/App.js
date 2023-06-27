import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Login, Signup } from "./pages"
import { NavBar } from "./components/layout/navBar"
import { Footer } from "./components/layout/footer"
import { ProductDetail } from "./components/containers";
import { Contact } from "./pages/contact";
import { CategoryDetail } from "./components/containers/index.js";
import { AuthProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/productList/:category" element={<CategoryDetail/>} /> 
          <Route path="/productList/:category/:id" element={<ProductDetail/>} /> 
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
