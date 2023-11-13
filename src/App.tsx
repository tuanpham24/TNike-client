import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
