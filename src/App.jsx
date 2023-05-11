import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Category from "./pages/Category";
import { Box } from "@mui/material";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/Checkout/Checkout";
import { OrderProvider } from "./contexts/OrderContext";

function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            padding="50px"
            fontFamily='"Roboto","Helvetica","Arial",sans-serif'
          >
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Cart />} path="/cart" />
              <Route element={<Checkout />} path="/checkout" />
              <Route element={<Category />} path="/category/:category" />
              <Route element={<Product />} path="/products/:id" />
            </Routes>
          </Box>
        </BrowserRouter>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
