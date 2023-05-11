import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem/CartItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Cart() {
  const cart = useCart();
  return (
    <>
      <h2>Your Cart</h2>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {cart.length === 0 ? <p>No items in cart.</p> : null}

        {/* <h2>Total: ${calculateTotal(cart).toFixed(2)}</h2> */}
      </div>
    </>
  );
}

export default Cart;
