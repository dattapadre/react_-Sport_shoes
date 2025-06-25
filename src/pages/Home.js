import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import Products_card from "./Products_card";

 function Home(){

    const [slider,Setslider] = useState([]);

    useEffect(()=>{

        axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res)=>{
            Setslider(res.data)
        })

    },[slider])

    return(<>

    <Navbar/>

<div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    </div>

    <div className="carousel-inner">

        {slider.map((val,index)=>(

        <a href={val.slider_btn} target="_blank" key={index}>
        <div className={index==0 ? "carousel-item active":"carousel-item "} >
            <div className="carousel-overlay"></div>
            <img src={val.slider_img} className="d-block w-100" alt="Slide 1"/>
            <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4 fw-bold">Innovative Solutions</h2>
                <p className="lead">Discover our cutting-edge technology services</p>
            </div>
        </div>
        </a>

        ))}
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>


   <div className="container py-5">
      <div className="row">

       <Products_card data={"/https://a2zithub.org/dairy/uploads/168259075648183048.jpg"}/>
       <Products_card data={"/"}/>
       <Products_card data={"/"}/>

       </div>
    </div>


    <Footer/>

    </>);
 }

 export default Home;