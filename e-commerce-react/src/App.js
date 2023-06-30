import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Login, Signup } from "./pages"
import { NavBar } from "./components/layout/navBar"
import { Footer } from "./components/layout/footer"
import { ProductDetail } from "./components/containers";
import { Contact } from "./pages/contact";
import { CategoryDetail } from "./components/containers/index.js";
import { AuthProvider } from "./context";
import { RouteProvider } from "./context/routeContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG-cePCtfrxTfsY80rykztvHYDJa0UCfc",
  authDomain: "ecommerce-apple-coderhouse.firebaseapp.com",
  projectId: "ecommerce-apple-coderhouse",
  storageBucket: "ecommerce-apple-coderhouse.appspot.com",
  messagingSenderId: "1077228004955",
  appId: "1:1077228004955:web:f80a695980c3d63d83017e",
  measurementId: "G-TPKFY738E2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
          <RouteProvider>
            <Routes>
              <Route path="/" element={<Home/>} /> 
              <Route path="/productList/:category" element={<CategoryDetail/>} /> 
              <Route path="/productList/:category/:id" element={<ProductDetail/>} /> 
              <Route path="/signup" element={<Signup/>} /> 
              <Route path="/login" element={<Login/>} /> 
              <Route path="/contact" element={<Contact/>} /> 
            </Routes>
          </RouteProvider>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
