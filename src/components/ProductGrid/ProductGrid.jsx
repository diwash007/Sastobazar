import { Typography, Box } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ heading, items }) => {
  return (
    <div>
      <Typography variant="h5">{heading}</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "15px",
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
