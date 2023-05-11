import React, { useState, useContext } from "react";

const OrderContext = React.createContext();
const SetOrderContext = React.createContext();

export const useOrders = () => useContext(OrderContext);
export const useSetOrders = () => useContext(SetOrderContext);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  return (
    <OrderContext.Provider value={orders}>
      <SetOrderContext.Provider value={setOrders}>
        {children}
      </SetOrderContext.Provider>
    </OrderContext.Provider>
  );
}
