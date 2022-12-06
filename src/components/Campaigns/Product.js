import React, { useState } from "react";
import { Link } from "..";
import "./Product.css";

const Product = ({ product }) => {
  const [productCount, setProductCount] = useState(product.initial_count);
  const [disableDate, setDisableDate] = useState(productCount === 0);
  const [donationDate, setDonationDate] = useState(product.min_tat_date.split("T")[0]);
  const [addedToBasket, setAddedToBasket] = useState(false);

  const onCountChangeHandler = (e) => {
    const selectedCount = e.target.value;

    if (selectedCount <= 0) {
      setAddedToBasket(false);
      setDisableDate(true);
    }
    if (selectedCount >= 1) setDisableDate(false);
    if (selectedCount >= 0) setProductCount(selectedCount);
  };

  const onDateChangeHandler = (e) => {
    if (!disableDate) {
      const selectedDate = new Date(e.target.value).getTime();
      const minTatDate = new Date(product.min_tat_date.split("T")[0]).getTime();
      if (selectedDate >= minTatDate) setDonationDate(e.target.value);
    }
  };

  const onAddToBasketHandler = () => {
    if (productCount > 0) {
      setAddedToBasket(true);
    }
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product__text">
        <h4>{product.name}</h4>
        <p className="text--light">{product.description}</p>
        <p className="product__price">₹{product.amount}/unit</p>

        <form onSubmit={handleOnFormSubmit}>
          <input onChange={onCountChangeHandler} type="number" value={productCount} />
          <input
            onChange={onDateChangeHandler}
            type="date"
            value={donationDate}
            min={product.min_tat_date.split("T")[0]}
            disabled={disableDate}
          />

          <div className="product-form__buttons">
            <button onClick={onAddToBasketHandler} className={`button btn--small ${addedToBasket ? "button--green" : "button--blue"}`}>
              Add to Basket
            </button>
            <Link to="/checkout" className="btn btn-primary btn--small">
              Donate Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
