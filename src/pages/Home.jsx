import React from "react";
import useSWR from "swr";
import { BASE_URL } from "../utils/constants";
import { CircularProgress } from "@mui/material";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(BASE_URL + "products", fetcher);

  return !data ? (
    <CircularProgress />
  ) : (
    <ProductGrid type="Browse all items" items={data} />
  );
}

export default Home;
