import { useEffect } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../ProductDetails.css";

function Product_det(){

  const  {product_id }=useParams();
  const [productinfo,Setproductinfo] = useState([]);

  const navigate= useNavigate()

  function Setdata(){

    var obj={"product_id":product_id,"token":localStorage.getItem("user_token")}
    axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
    Setproductinfo(res.data)
    })
  }

  useEffect(()=>{

    Setdata()

  },[])

  function addedcart(){

    if(localStorage.getItem("user_token")==undefined){
      navigate("/login")
    }else{
    var obj={"product_id":product_id,"token":localStorage.getItem("user_token")}
    axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
      console.log(res.data)
        Setdata()
    })

    }
  }

    return(<>


    <Navbar/>



  <div className="container py-5">
    <div className="row">

      <div className="col-md-6">
        <img src={productinfo.product_img} alt="Product" className="img-fluid rounded shadow-lg"/>
      </div>

   
      <div className="col-md-6">
        <p className="display-6">{productinfo.product_name}</p>
        <p className="text-muted">{productinfo.cat_name}</p>


        <div className="h4 text-success mb-4">${productinfo.price}</div>

  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisi ut eros aliquet elementum. Aliquam erat volutpat. In nec augue non nisi volutpat tincidunt ut eu ligula.</p>

     
        <div className="d-flex align-items-center mb-4">
          <label htmlFor="quantity" className="me-3">Quantity</label>
          <input type="number" id="quantity" className="htmlForm-control w-25" value={1}  min="1"/>
        </div>


        <div>{productinfo.cart=="No"?<button onClick={()=>{addedcart()}} className="btn btn-primary btn-lg w-100"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>:''}</div>
        
        <div>{productinfo.cart=="Yes"? <Link to={"/cart"}> <button className="btn btn-success btn-lg w-100"><i class="fa-solid fa-cart-shopping"></i>Continue with Cart</button></Link>:''}</div>

      </div>
    </div>
  </div>

     
    <Footer/>
     
    </>)
}

export default Product_det;