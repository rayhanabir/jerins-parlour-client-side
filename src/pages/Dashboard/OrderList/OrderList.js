import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const OrderList = () => {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res =>res.json())
        .then(data => {
          setOrders(data);
        })
    },[]);
   
  return (
    <div>
      <h2 className="text-center">Order list</h2>
      {
          orders.map(order => 
              <div key ={order._id}>
                  <Table>
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th> Email</th>
                            <th>Service Name</th>    
                            <th>Action</th>    
                        </tr>    
                    </thead> 
                    <tbody>
                    <tr>
                        
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.serviceName}</td>
                        <td>Delete</td>
                        </tr>    
                    </tbody> 
                  </Table>
              </div>
          )
      }
    </div>
  );
};

export default OrderList;
