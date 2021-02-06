import React from "react";

function ProductsHeroSection(props) {
  return (
    <div className="hero-container">
      <video src="/videos/video-4.mp4" autoPlay loop muted />
      <h1> {props.cate.toUpperCase()} ⚡️</h1>

      <div className=""></div>
    </div>
  );
}

export default ProductsHeroSection;
