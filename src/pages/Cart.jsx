import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem/CartItem";
import { calculateTotal } from "../utils/functions";

import { Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Cart() {
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const cart = useCart();

  useEffect(() => {
    const tax = calculateTotal(cart) * 0.13;
    setTax(tax.toFixed(2));
    setGrandTotal((calculateTotal(cart) + tax).toFixed(2));
  }, [cart]);

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
                <TableCell>Total</TableCell>
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
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div style={{ textAlign: "right", marginTop: 20 }}>
            <Typography variant="body2" gutterBottom>
              Subtotal: ${calculateTotal(cart).toFixed(2)}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tax (13%): ${tax}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Grand Total: ${grandTotal}
            </Typography>
            <Link to={{ pathname: "/checkout" }}>
              <Button variant="contained" color="success">
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
