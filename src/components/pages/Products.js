import React from "react";
import "../../App.css";

import { useParams } from "react-router-dom";
import ProductsHeroSection from "../ProductsHeroSection";
import ProductsCards from "../ProductsCards";
import Footer from "../Footer"

export default function Products(props) {
  let { cate } = useParams();

  return (
    <div Autofocus>
      <ProductsHeroSection cate={cate} />
      <ProductsCards cate={cate}/>
      <Footer/>
    </div>
  );
}
