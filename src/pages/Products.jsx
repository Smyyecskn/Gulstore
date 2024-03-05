import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Loading from "../components/Loading";
import { useProducts } from "../context/ProductProvider";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");

  // const getData = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(
  //       `https://dummyjson.com/products/search?q=${search}`
  //     );
  //     // console.log(data);
  //     setProducts(data.products);
  //     // console.log(data.products);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [search]);
  const { products, loading } = useProducts();
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <SearchInput />
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>
      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products?.map((item, id) => (
            <ProductCard key={id} item={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl text-red text-center m-32">NO PRODUCTS</h2>
      )}
      <div></div>
    </div>
  );
};

export default Products;
