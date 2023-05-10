import useSWR from "swr";
import { Button, CircularProgress, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { fetcher } from "../utils/functions";

// import AuthContext from "../../context/AuthContext";

const Product = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  // const { user, cart, setCart } = useContext(AuthContext);
  const { data } = useSWR(BASE_URL + "products/" + id, fetcher);
  const product = data;
  const [quantity, setQuantity] = useState(1);

  // const getProduct = async (id) => {
  //   try {
  //     const response = await axios.get(BASE_URL + "products/" + id);
  //     setProduct(response.data);
  //     setSpinner(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProduct(id);
  // }, [id]);

  // const handleSubmit = async (e) => {
  //   if (user) {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.put(BASE_URL + "carts/" + cart.id, {
  //         products: [
  //           {
  //             id: id,
  //             quantity: quantity,
  //           },
  //         ],
  //       });
  //       setCart(response.data);
  //       navigate("/cart");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <div
      style={{
        width: "500px",
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      }}
    >
      {!product ? (
        <CircularProgress />
      ) : (
        <>
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
              <select>
                <option value="m">S</option>
                <option value="m">M</option>
                <option value="m">L</option>
                <option value="m">XL</option>
              </select>
            </div>
            <div>
              Quantity:{" "}
              <input
                type="number"
                name="quantity"
                min="1"
                max="50"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                required
              />
            </div>
            <Button type="submit" variant="contained">
              Add to Cart
            </Button>
          </form>
        </>
      )}
    </div>
  );
};
export default Product;
