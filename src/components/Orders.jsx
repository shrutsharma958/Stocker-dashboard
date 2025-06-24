import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);
   
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      });
  }, [])





  return (
    <div className="orders">


      <div>

        <>
          <h3 className="title">Orders({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Time</th>
                <th>Type .</th>
                <th>Product</th>
                <th>Price .</th>
                <th>Qty.</th>
                <th>Instrument</th>
              </tr>
              {allOrders.map((stock,index) => {
                return (
                  <tr key={index}>
                    <td>{stock.time}</td>
                    <td>{stock.mode}</td>
                    <td>{stock.name}</td>
                    <td>{stock.price}</td>
                    <td>{stock.qty}</td>
                    <td>CNC</td>
   
                  </tr>
                )
              })}


            </table>
          </div>
        </>
      </div>





    </div>
  );
};

export default Orders;


const Component2 = () => {

  return (
    <div>

      <>
        <h3 className="title">Orders({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Time</th>
              <th>Type .</th>
              <th>Instrument</th>
              <th>Product</th>
              <th>Qty.</th>
              <th>Price .</th>
            </tr>
            {allOrders.map((stock) => {
              <tr>
                <td>{stock.time}</td>
                <td>{stock.mode}</td>
                <td>CNC</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
              </tr>
            })}


          </table>
        </div>
      </>
    </div>
  )
}



const Component1 = () => {
  return (
    <div className="no-orders">
      <p>You haven't placed any orders today</p>

      <Link to={"/"} className="btn">
        Get started
      </Link>
    </div>

  )
}


