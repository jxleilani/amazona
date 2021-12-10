import React from "react";
import { useParams, useLocation } from "react-router-dom";

function CartScreen(props) {
  const params = useParams();
  const productId = params.id;
  const location = useLocation();
  const qty = location.search
    ? Number(location.search.split("=")[1])
    : 1;

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}

export default CartScreen;
