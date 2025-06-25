import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css"
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";


function Order_deatils(){
    const {product_order_id} =useParams()

    useEffect(()=>{
        var obj={"token":localStorage.getItem("user_token"),"order_id":product_order_id}
        axios.post("https://a2zithub.org/dairy/abi/order_det",obj).then((res)=>{
            console.log(res.data)
        })
    },[])

    return(<>

<Navbar/>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-lg-10">


            <div class="card shadow-sm">
                <div class="card-header bg-light">
                    <h4 class="mb-0"><i class="bi bi-list-check me-2"></i>Tracking History</h4>
                </div>
                <div class="card-body">
                    <div class="timeline">
                        <div class="timeline-item complete">
                            <div class="timeline-icon"><i class="bi bi-check-circle-fill"></i></div>
                            <div class="timeline-content">
                                <h6>Delivered</h6>
                                <p class="mb-1">Package delivered to recipient</p>
                                <small class="text-muted">Today, 3:45 PM</small>
                            </div>
                        </div>
                        <div class="timeline-item complete">
                            <div class="timeline-icon"><i class="bi bi-truck"></i></div>
                            <div class="timeline-content">
                                <h6>Out for Delivery</h6>
                                <p class="mb-1">Package is out for delivery</p>
                                <small class="text-muted">Today, 10:30 AM</small>
                            </div>
                        </div>
                        <div class="timeline-item complete">
                            <div class="timeline-icon"><i class="bi bi-building"></i></div>
                            <div class="timeline-content">
                                <h6>At Local Facility</h6>
                                <p class="mb-1">Package arrived at Noida hub</p>
                                <small class="text-muted">Yesterday, 8:15 PM</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><i class="bi bi-box-seam"></i></div>
                            <div class="timeline-content">
                                <h6>Shipped</h6>
                                <p class="mb-1">Package left Mumbai warehouse</p>
                                <small class="text-muted">Jun 10, 4:20 PM</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><i class="bi bi-box-seam"></i></div>
                            <div class="timeline-content">
                                <h6>Order Processed</h6>
                                <p class="mb-1">Seller has processed your order</p>
                                <small class="text-muted">Jun 9, 11:45 AM</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<Footer/>
    
    </>)
}

export default Order_deatils;