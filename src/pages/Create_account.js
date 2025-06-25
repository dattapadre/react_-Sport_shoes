import { useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Create_account(){

      const navigate = useNavigate();

    const [username,Setusername] = useState('');
    const [usermobile,Setusermobile] = useState('');
    const [useremail,Setuseremail] = useState('');
    const [userpassword,Setuserpassword] = useState('');


    function submit(event){

        event.preventDefault();

        var obj={"user_name":username,"user_mobile":usermobile,"user_email":useremail,"user_password":userpassword}

        axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res)=>{

            navigate("/login");

        })

        
    }

    return(<>

    <Navbar/>

    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="card shadow">
                    <div className="card-body p-4 p-md-5">
                        <div className="text-center mb-4">
                            <h2 className="fw-bold text-primary">Create Account</h2>
                        </div>

                        <form  action="" method="post" onSubmit={submit}>
                            <div className="mb-3">
                                <label for="username" className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" required onChange={(e)=>Setusername(e.target.value)}/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="mobile" className="form-label">Mobile Number</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                    </span>
                                    <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number" required onChange={(e)=>Setusermobile(e.target.value)}/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="email" className="form-label">Email Address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                        </svg>
                                    </span>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" required onChange={(e)=>Setuseremail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                        </svg>
                                    </span>
                                    <input type="password" className="form-control" id="password" placeholder="Create password" required onChange={(e)=>Setuserpassword(e.target.value)}/>
                                    <button className="btn btn-outline-secondary" type="button" id="togglePassword">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="termsCheck" required/>
                                <label className="form-check-label" for="termsCheck">I agree to the Terms and Conditions</label>
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Create Account</button>
                            </div>

                            <div className="text-center mt-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


   <Footer/>

    </>)
}

export  default Create_account;