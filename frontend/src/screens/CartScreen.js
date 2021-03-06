import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

function CartScreen(props) {
  const params = useParams();
  const productId = params.id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

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
