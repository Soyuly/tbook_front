import React, { useState } from "react";
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";

function CartItem({ item, onCountChange, checked, onCheckChange }) {
  const handleCheckboxClick = () => {
    onCheckChange(item.productId, !checked);
  };

  const handleMinusClick = () => {
    if (item.quantity > 1) {
      onCountChange(item.productId, item.quantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (item.quantity < 99) {
      onCountChange(item.productId, item.quantity + 1);
    }
  };

  return (
    <div className="cart_item">
      <div className="cart_item-title">
        {checked ? (
          <BsCheckSquareFill
            size="1.25rem"
            className="check-item"
            onClick={handleCheckboxClick}
          />
        ) : (
          <BsCheckSquare
            size="1.25rem"
            className="check-item"
            onClick={handleCheckboxClick}
          />
        )}
        <div className="cart_item-title-text">{item.productName}</div>
        <ion-icon name="close-outline" className="cart_item-cancel"></ion-icon>
      </div>
      <div className="cart_item-content-wrapper">
        <img
          src={item.productImage}
          style={{
            height: 90,
            width: 90,
          }}
          alt=""
          className="cart_item-image"
        />
        <div className="cart_item-content">
          <div className="cart_item-makeby">
            제조사:
            <div className="cart_item-company">{item.productMadeBy}</div>
          </div>
          <div className="cart_item-release">{item.productName}</div>
          {/* <div className="cart_item-release">{item.release}</div> */}
          <div className="cart_item-price">
            {item.unitPrice && item.unitPrice.toLocaleString()}&nbsp;원
          </div>
        </div>

        <div className="cart_item_count">
          <div className="cart_item_count-minus" onClick={handleMinusClick}>
            -
          </div>
          <input
            className="cart_item_count-box"
            type="number"
            value={item.quantity}
            readOnly
          />
          <div className="cart_item_count-plus" onClick={handlePlusClick}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
