import React, { useState, useContext } from "react";

const CartContext = React.createContext();
const SetCartContext = React.createContext();

export const useCart = () => useContext(CartContext);
export const useSetCart = () => useContext(SetCartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={cart}>
      <SetCartContext.Provider value={setCart}>
        {children}
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
}
