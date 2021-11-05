import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className='card'>
      <a href={`/product/${product._id}`}>
        <img className='medium' src={product.image} alt={product.name} />
      </a>
      <div className='card-body'>
        <a href='product.html'>
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </div>
      <div className='price'>{`$${product.price}`}</div>
    </div>
  );
}

export default Product;
