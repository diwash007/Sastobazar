import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link to={"/products/" + item.id}>
      <Card
        sx={{
          display: "inline-block",
          margin: "10px",
          width: "242px",
          transition: "transform 0.5s",
          ":hover": { boxShadow: 10, transform: "scale(1.05)" },
        }}
      >
        <CardMedia
          component="img"
          image={item.thumbnail}
          sx={{ height: 150 }}
          alt="p"
        />
        <CardContent
          sx={{
            padding: "10px",
            "&:last-child": {
              paddingBottom: "10px",
            },
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold" }}
              noWrap={true}
            >
              {item.title}
            </Typography>
            <Typography align="right">${item.price}</Typography>
          </div>
          <Rating size="small" value={item.rating} readOnly />
          <Typography component="span" variant="subtitle2">
            ({item.stock})
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
