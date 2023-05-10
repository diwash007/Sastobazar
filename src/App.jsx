import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Category from "./pages/Category";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Product />} path="/product" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Category />} path="/category/:category" />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
