import React from 'react';

function Cart() {
  return (
    <div className = "cart">
      <div className = "cart-header">
        <h2>Shopping Cart</h2>
        <button
          onClick = {hideCart}>
            X
        </button>
      </div>
    </div>
  );
}

export default Cart;