import React from "react";
import "./Cards.css";
import "./ProductsCards.css";
import CardItem from "./CardItem";
import data from "../assets/products";


function ProductsCards(props) {

  let filtrado = data.filter((obj)=>{
    return obj.category === props.cate
  })  


  return (
    <div className="cardsSku">
      <h1>Available!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {filtrado.map((item) => {
            return (
              <ul className="cards__items">
                <CardItem
                  src={item.image}
                  category={item.category}
                  text={item.description}
                  price={item.price}
                  name={item.name}
                  path= {`/products`}
                />
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
