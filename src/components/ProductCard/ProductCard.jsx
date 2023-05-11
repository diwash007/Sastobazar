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
          padding: "10px",
          margin: "10px",
          width: "300px",
          transition: "transform 0.5s",
          ":hover": { boxShadow: 10, transform: "scale(1.05)" },
        }}
      >
        <CardMedia
          component="img"
          image={item.image}
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
            <Typography align="right" color="green">
              ${item.price}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rating size="small" value={item.rating.rate} readOnly />
            <Typography component="span" variant="subtitle2">
              ({item.rating.count})
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
