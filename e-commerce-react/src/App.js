import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages"
import { NavBar } from "./layout/navBar"
import { Footer } from "./layout/footer"
import { ProductDetailContainer } from "./components/detail/productDetailContainer";
import { AuthProvider } from "./context";
import { CategoryDetailContainer } from "./components/detail/categoryDetailContainer";
import { CartProvider } from "./context/contextCart";
import { Cart } from "./components";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>} /> 
              <Route path="/productList/:category" element={<CategoryDetailContainer/>} /> 
              <Route path="/productList/:category/:id" element={<ProductDetailContainer/>} /> 
              <Route path="/cart" element={<Cart/>} /> 
              {/* <Route path="/checkout" element={<Checkout/>} />  */}
            </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
