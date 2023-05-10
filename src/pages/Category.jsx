import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";
import { BASE_URL } from "../utils/constants";

const Category = () => {
  let { category } = useParams();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(BASE_URL + "products/category/" + category, fetcher);

  return !data ? (
    <CircularProgress />
  ) : (
    <ProductGrid heading={category} items={data} />
  );
};

export default Category;
