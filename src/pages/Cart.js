
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import { Link } from "react-router-dom";
import "../App.css";

function Cart(){

    const [cartinfo,Setcartinfo]= useState([]);
    const [subTotal,SetTotal] = useState(0);
    function SetData(){

        var obj={"token":localStorage.getItem("user_token")}
        axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((res)=>{
            console.log(res.data)
            Setcartinfo(res.data)

    let total = 0;
    res.data.map((item) => {
      total += item.price * item.qty;
    });
      SetTotal(total);

    })

    }

    useEffect(()=>{
        SetData()
    },[])

    function remove(product_econ_cart_id){
       var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem("user_token")}
       axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty",obj).then((res)=>{
        SetData()
       })
    }

   function inc_qty(product_econ_cart_id){
        var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem("user_token")}
       axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty",obj).then((res)=>{
         SetData()
       })
    }

    function dec_cart_qty(product_econ_cart_id){
        var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem("user_token")}
       axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty",obj).then((res)=>{

        SetData()
       })
    }

    return(<>

    <Navbar/>

<div className="container mt-5">
  <h2 className="mb-4 text-center">Your Cart</h2>
  <div className="table-responsive">
    <table className="table table-bordered align-middle text-center">
      <thead className="table-dark">
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartinfo.map((val,index)=>(

        <tr className="text-center" key={index}>
          <td><img src={val.product_img} className="w-25" alt="Product"/></td>
          <td>{val.product_name}</td>
          <td>${val.price}</td>
          <td>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={()=>{dec_cart_qty(val.product_econ_cart_id)}} className="btn btn-outline-secondary btn-sm mx-1 fw-bold">-</button>
                {val.qty}
                <button onClick={()=>{inc_qty(val.product_econ_cart_id)}} className="btn btn-outline-secondary btn-sm mx-1 fw-bold">+</button>
            </div>
          </td>
          <td>${val.price*val.qty}</td>
          <td><button onClick={()=>remove(val.product_econ_cart_id)} className="btn btn-danger btn-sm">Remove</button></td>
        </tr>

        ))}

      </tbody>
    </table>
  </div>

  <div className="text-center mt-4">

{cartinfo.length > 0 ? (<Link to="/checkout"> <div className="text-end mt-4"><h4>Subtotal: ${subTotal}</h4><button className="btn btn-success">Proceed to Checkout</button></div></Link>) : (<Link  to="/products" className="text-center btn btn-primary btn-lg"><i class="fa-solid fa-cart-shopping"></i>  Shop Now</Link>)}
  </div>

</div>

<br/>
<br/>

<Footer/>

    </>)
}

export default Cart;