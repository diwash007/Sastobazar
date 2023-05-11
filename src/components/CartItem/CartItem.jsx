import { IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";
import { useSetCart } from "../../contexts/CartContext";

function CartItem({ item }) {
  const setCart = useSetCart();
  return (
    <TableRow>
      <TableCell style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={item.image}
          alt={item.title}
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
        />
        {item.title}
      </TableCell>
      <TableCell>{item.size}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell sx={{ color: "green" }}>
        ${(item.quantity * item.price).toFixed(2)}
      </TableCell>
      <TableCell>
        <IconButton
          onClick={() => {
            setCart((prev) => {
              return prev.filter((i) => i.id !== item.id);
            });
          }}
        >
          <Close sx={{ color: "red" }}></Close>
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
