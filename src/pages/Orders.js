import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Orders() {

  const [orders_list,setorders_list] = useState([]);

  useEffect(()=>{
    var obj={"token":localStorage.getItem("user_token")}
    axios.post("https://a2zithub.org/dairy/abi/order_list",obj).then((res)=>{
      setorders_list(res.data.order_det)
    })
  },[])

  return (
  
    <>
      <Navbar />
      
      <div className="orders-container">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card orders-card shadow-sm">
                <div className="card-body">
                  <h5 className="mb-4 orders-title">Recent Orders</h5>
                  <div className="table-responsive">
                    <table className="table orders-table">
                      <thead className="orders-thead">
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Address</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders_list.map((val,i)=>(

                        <tr>
                          <td>{val.product_order_id}</td>
                          <td>{val.entry_date}</td>
                          <td>$ {val.ttl_amount}</td>
                          <td><span className="badge  text-dark">{val.area+","+val.city+","+val.district+","+val.pincode+","+val.state+","+val.country}</span></td>
                          <td><Link to={`/order_deatils/${val.product_order_id}`}><button className="btn btn-sm btn-outline-primary">View</button></Link></td>
                        </tr>

                         ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Orders;