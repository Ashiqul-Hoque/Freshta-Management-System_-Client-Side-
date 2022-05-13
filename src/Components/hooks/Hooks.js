import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-hollows-45399.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);

  return [allProducts, setAllProducts];
};
export default useAllProducts;
