 
//  import { useParams } from "react-router-dom";

 function Footer(){

    return(<>

<footer className="bg-dark text-white pt-5 pb-4">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">
                    <i className="fas fa-rocket me-2"></i>BrandName
                </h5>
                <p>Your company description goes here. Explain what makes your business special and how you stand out from the competition.</p>
                <div className="mt-4">
                    <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Quick Links</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Services</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Pricing</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact</a></li>
                </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Services</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Web Design</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">App Development</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Digital Marketing</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">SEO Services</a></li>
                    <li className="mb-2"><a href="#" className="text-white text-decoration-none">Graphic Design</a></li>
                </ul>
            </div>

            <div className="col-lg-4 col-md-6">
                <h5 className="text-uppercase mb-4">Contact Us</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <i className="fas fa-map-marker-alt me-3"></i> 123 Street, City, Country
                    </li>
                    <li className="mb-2">
                        <i className="fas fa-phone me-3"></i> +1 234 567 890
                    </li>
                    <li className="mb-2">
                        <i className="fas fa-envelope me-3"></i> info@example.com
                    </li>
                    <li className="mb-2">
                        <i className="fas fa-clock me-3"></i> Mon-Fri: 9AM - 5PM
                    </li>
                </ul>
            </div>
        </div>

        <hr className="my-4"/>

        <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
                <p className="mb-0">&copy; 2023 BrandName. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
                <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white text-decoration-none me-3">Terms of Service</a>
                <a href="#" className="text-white text-decoration-none">Sitemap</a>
            </div>
        </div>
    </div>
</footer>

    </>)
 }

 export default Footer;