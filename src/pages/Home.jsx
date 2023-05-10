import React from "react";
import useSWR from "swr";
import { BASE_URL } from "../utils/constants";
import { CircularProgress } from "@mui/material";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { fetcher } from "../utils/functions";

function Home() {
  const { data } = useSWR(BASE_URL + "products", fetcher);

  return !data ? (
    <CircularProgress />
  ) : (
    <ProductGrid heading="Browse all items" items={data} />
  );
}

export default Home;
