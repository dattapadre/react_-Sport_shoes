import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
 function Navbar(){

    return(<>


    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-white sticky-top ">
        <div className="container p-3">
            <a className="navbar-brand" href="#">
                <i className="fas fa-rocket me-2"></i>Shoping
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">products</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                    </li>
                </ul>

                <div className={localStorage.getItem("user_token")==undefined?"d-block":"d-none"}>
                    <div className="d-flex align-items-center">
                      <Link to="/login" className="btn btn-outline-primary btn-login">
                        <i className="fas fa-sign-in-alt me-2"></i>Login
                       </Link>
                      <Link to="/create_account" className="btn btn-signup ms-2">
                        <i className="fas fa-user-plus me-2"></i>Sign Up
                      </Link>
                    </div>
                </div>

                <div className={localStorage.getItem("user_token")==undefined?"d-none":"d-block"}>
                    <div className="d-flex align-items-center">
                      <Link to="/cart" className="btn btn-outline-primary btn-login">
                        <i class="fa-solid fa-cart-shopping"></i>Cart
                       </Link>
                      <Link to="/profile" className="btn btn-signup ms-2">
                        <i className="fas fa-user-plus me-2"></i>Profile
                      </Link>
                    </div>
                </div>

            </div>
        </div>
    </nav>
    

    </>)
 }

 export default Navbar;