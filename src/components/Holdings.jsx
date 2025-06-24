import React from "react";
//import {holdings} from '../data/data'
import { useState,useEffect } from "react";

const Holdings = () => {

  const [holding,setHoldings]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
      fetch("http://localhost:3002/allHoldings")
      .then((res) => res.json())
      .then((data) => setHoldings(data))
      .catch((error) => console.error("Fetch error:", error));
  },[]);
 

  return (
    <>
      <h3 className="title">Holdings ({holding.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

        {holding.map((stock,index)=>{
          const currVal = stock.price*stock.qty;
          const isProfit = currVal-(stock.avg * stock.qty) >=0.0;
          const profClass= isProfit ? "profit":"loss";
          const dayClass=stock.isLoss?"loss":"profit";

          return(
            <tr key={stock.index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg}</td>
            <td>{stock.price}</td>
            <td>{currVal}</td>
            <td className={profClass}>{(currVal-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
          )
        }
        )}



        </table>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      
    </>
  );
};

export default Holdings;
