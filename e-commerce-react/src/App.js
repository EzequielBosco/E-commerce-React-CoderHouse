import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Login, Signup } from "./pages"
import { NavBar } from "./layout/navBar"
import { Footer } from "./layout/footer"
import { ProductDetail } from "./components/detail/productDetailContainer";
import { Contact } from "./pages/contact";
import { AuthProvider } from "./context";
import { CategoryDetailContainer } from "./components/detail/categoryDetailContainer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/productList/:category" element={<CategoryDetailContainer/>} /> 
            <Route path="/productList/:category/:id" element={<ProductDetail/>} /> 
            {/* <Route path="/cart" element={<ProductDetail/>} />  */}
            {/* <Route path="/checkout" element={<Checkout/>} />  */}
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
