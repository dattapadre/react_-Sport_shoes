import { Link } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(){

    const [user_mobile,Setusermobile] = useState("");
    const [user_password,Setuserpassword] = useState("");
    const [loginerror,Setloginerror]= useState("")

    const navigate=useNavigate()

  function loginProsses(event){
        event.preventDefault();

        var obj={"user_mobile":user_mobile,"user_password":user_password}

        axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{

            if(res.data.status=="success")
            {
                localStorage.setItem("user_token",res.data.token)
                navigate("/products")
            }else{
                 Setloginerror("Invalid Username or Password")
            }
        })
    }

    return(<>

     <Navbar/>

    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow">
                    <div className="card-body p-4">
                        <div className="text-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#0d6efd" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                            <h2 className="mt-3 mb-1">Login</h2>
                        </div>

                        <form method="post" onSubmit={loginProsses}>

                            <div className="mb-3">
                                <label for="username" className="form-label">Usermobile</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        </svg>
                                    </span>
                                    <input type="number" className="form-control"  placeholder="Enter usermobile" required onChange={(e)=>{Setusermobile(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label for="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                        </svg>
                                    </span>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password" required onChange={(e)=>{Setuserpassword(e.target.value)}}/>
                                    <button className="btn btn-outline-secondary" type="button" id="togglePassword">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="form-text text-end">
                                    <a href="#" className="text-decoration-none">Forgot password?</a>
                                </div>
                                <div className="text-center">
                                    <p className="text-danger ">{loginerror}</p>
                                </div>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                <label className="form-check-label" for="rememberMe">Remember me</label>
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>

                            <div className="text-center mt-3">
                                <p>Don't have an account? <Link to="/create_account" className="text-decoration-none">Register</Link></p>
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

export default Login;