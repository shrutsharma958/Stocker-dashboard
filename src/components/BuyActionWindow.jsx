import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = (time) => {
    axios.post("https://stocker-backend.vercel.app/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
      time:time,
    });
   
    closeBuyWindow();
   console.log(clickTime)
  };

  const handleCancelClick = () => {
    
    closeBuyWindow();
  };

  const [clickTime, setClickTime] = useState('');

  


  const wrapper=()=>{
   const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  setClickTime(time);         // ✅ updates state (for UI if needed)
  handleBuyClick(time); 
  }

  return (
    <div className=" container" id="buy-window" draggable='true'>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={price}
              placeholder={price}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required <b> ₹{price}</b></span>
        <div>
          <Link className="btn btn-blue" onClick={ wrapper}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
