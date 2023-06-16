import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ProductListPage, Home, Login, Signup } from "./pages"
import { NavBar } from "./components/layout/navBar"
import { Footer } from "./components/layout/footer"
import { ProductDetail } from "./components/common";
import { Contact } from "./pages/contact";
import { CategoryDetail } from "./components/common/containers/categoryDetailContainer/categoryProductDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/productList" element={<ProductListPage/>} /> 
        <Route path="/productList/:category" element={<CategoryDetail/>} /> 
        <Route path="/productList/:category/:id" element={<ProductDetail/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
