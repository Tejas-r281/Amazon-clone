import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, price, rating, image }) {
//  const[state,dispatch]=useStateValue();
//  state containing all the items to be displayed
const [{basket},dispatch]=useStateValue();
// console.log("this is the basket>>>>",basket);
  const addToBasket=()=>{
    // dispatch the item into the data layer
    // alert(`Your product ${title} has been added to the basket`);

    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <button>Add to cart</button>
         */}

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
             return <p>⭐</p>;
            })}
            {/* doubt
            */}
        </div>
      </div>
      <img src={image} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
