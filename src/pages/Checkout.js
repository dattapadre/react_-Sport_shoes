import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import "../Checkout.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Checkout(){

  const navigator=useNavigate()

  const [area,setarea]=useState("")
  const [city	,setcity]=useState("")
  const [district,setdistrict]=useState("")
  const [state,setstate]=useState("")
  const [country,setcountry]=useState("")
  const [pincode,setpincode]=useState("")
  const [payment_type,setpayment_type]=useState("")

  const [cartList,setcartList]= useState([]);

  function submit(event){

    event.preventDefault();
    var obj={area,city,district,state,country,pincode,payment_type,"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
      navigator("/orders")
    })
  }

    useEffect(()=>{
        var obj={"token":localStorage.getItem("user_token")}
        axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((res)=>{
            setcartList(res.data)
        })

    },[])

    return(<>

       <Navbar/>
       <h1>Checkout</h1>


<div className="container mt-5 p-4 border rounded">
  <div className="row">
    <div className="col-md-6 border-end">
<form  onSubmit={submit}>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter Area" name="area" required  onChange={(e)=>{setarea(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter City" name="city" required  onChange={(e)=>{setcity(e.target.value)}} />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter District" name="district" required  onChange={(e)=>{setdistrict(e.target.value)}} />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter State" name="state"required  onChange={(e)=>{setstate(e.target.value)}} />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter Country" name="country" required  onChange={(e)=>{setcountry(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter Pincode" name="pincode" required  onChange={(e)=>{setpincode(e.target.value)}} />
  </div>
  <div className="mb-3">
    <select className="form-select" name="payment_type" required  onChange={(e)=>{setpayment_type(e.target.value)}}>
      <option selected disabled>Select Payment Type</option>
      <option value="cash">Cash on Delivery</option>
      <option value="card">Credit/Debit Card</option>
      <option value="upi">UPI</option>
      <option value="netbanking">Net Banking</option>
    </select>
  </div>
  <button className="btn btn-dark">Place Order</button>
</form>

    </div>


 <div className="col-md-6 mb-4  justify-content-center d-flex flex-column  ">
<center>
     {cartList.map((val,i)=>(
  <div className="border p-3 rounded-3 shadow-sm w-100 overflow-auto mb-3 " style={{maxWidth: '500px'}}>
    <div className="d-flex mb-3">
      <img 
        src={val.product_img} 
        className="img-fluid border rounded me-3" 
        alt={val.product_name}
        style={{width: '120px', height: '120px', objectFit: 'cover'}}
      />
      <div className="flex-grow-1">
        <h5 className="mb-2">{val.product_name}</h5>
        <p className="mb-1">
          <span className="text-muted">Category:</span> 
          <span className="badge bg-light text-dark ms-2">{val.cat_name}</span>
        </p>
                <div className="mt-3">
          <span className="text-muted">Quantity: ₹{val.qty}</span>
        </div>
        <div className="mt-3">
          <span className="text-muted"> Total : ₹{val.price}</span>
        </div>
      </div>
    </div>
    <Link to={`/product_det/${val.product_id}`}>
    <button className="btn btn-primary w-100 mt-2">
      View Details
    </button>
    </Link>
  </div>


        ))}
</center>        

</div>

  </div>
</div>

       <br/>
       <br/>

       <Footer/>

    </>)
}

export default Checkout;