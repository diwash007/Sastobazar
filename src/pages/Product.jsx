import useSWR from "swr";
import { Button, CircularProgress, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { fetcher } from "../utils/functions";
import { useSetCart } from "../contexts/CartContext";
import { ArrowBack } from "@mui/icons-material";

const Product = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const setCart = useSetCart();
  const { data } = useSWR(BASE_URL + "products/" + id, fetcher);
  const product = data;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCart((prev) => [
      ...prev,
      { ...product, quantity: quantity, size: size },
    ]);
    navigate("/cart");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      }}
    >
      {!product ? (
        <CircularProgress />
      ) : (
        <>
          <Button onClick={() => navigate(-1)}>
            <ArrowBack />
          </Button>
          <div
            width="100%"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <img
              src={product.image}
              width={250}
              height={250}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <b>{product.title}</b>
            </span>
            <span style={{ color: "green", fontWeight: "bold" }}>
              ${product.price}
            </span>
          </div>
          <Rating size="small" value={product.rating.rate} readOnly />
          <Typography component="span" variant="subtitle2">
            ({product.rating.count})
          </Typography>
          <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            {product.description}
          </div>
          <form
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div>
              Size:{" "}
              <select
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              Quantity:{" "}
              <input
                type="number"
                name="quantity"
                min="1"
                max="50"
                value={isNaN(quantity) ? 1 : quantity}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
                required
              />
            </div>
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Add to Cart
            </Button>
          </form>
        </>
      )}
    </div>
  );
};
export default Product;
