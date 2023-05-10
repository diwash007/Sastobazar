import { Typography, Box } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ type, items }) => {
  return (
    <div
      style={{ border: "1px solid thistle", padding: 15, margin: "40px 20px" }}
    >
      <Typography variant="h5">{type}</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {items.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
      <Box sx={{ height: "25px", width: "0px" }} />
    </div>
  );
};

export default ProductGrid;
