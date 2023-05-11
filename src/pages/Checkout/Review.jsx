import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useCart } from "../../contexts/CartContext";
import { calculateTotal } from "../../utils/functions";

const addresses = ["New Baneshwor", "Kathmandu", "44600", "Nepal"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr Balen Sampang" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  const products = useCart();
  const subtotal = calculateTotal(products);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">
              ${product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <div style={{ textAlign: "right", marginTop: 20 }}>
          <Typography variant="body2" gutterBottom>
            Subtotal: ${subtotal}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Tax (13%): ${(0.13 * subtotal).toFixed(2)}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
            Grand Total: ${(subtotal + 0.13 * subtotal).toFixed(2)}
          </Typography>
        </div>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Balen Sampang</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
