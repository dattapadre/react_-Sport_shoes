import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import Products_card from "./Products_card";
import axios from "axios";

function Products(){

    const [product,SetProduct] = useState([]);

    useEffect(()=>{

        axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
         SetProduct(res.data)
        })

    },[product])

    return(<>

      <Navbar/>
      <br/>
      <br/>
      <h1 className="text-center fw-bold text-primary">Products</h1>

      <div className="container py-5 ">
    <div className="row">

      {product.map((val,index)=>(

     <Products_card data={val}/>

      ))}

      </div>
    </div>

      <Footer/>

    </>)
}

export default Products;