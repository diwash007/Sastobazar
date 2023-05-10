import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { BASE_URL } from "../utils/constants";
import { CircularProgress, Box } from "@mui/material";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function Home() {
  const [totalItems, setTotalItems] = useState(20);
  const [spinner, setSpinner] = useState(true);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(BASE_URL + "products", fetcher);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {!data ? (
        <CircularProgress />
      ) : (
        <ProductGrid
          type="Browse all items"
          items={data}
        />
      )}
    </Box>
  );
}

export default Home;
