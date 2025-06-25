import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";

function Contact(){


return(<>

<Navbar/>

    <section class="contact-hero text-center mb-5">
        <div class="container">
            <h1 class="display-4 fw-bold mb-3">Contact Us</h1>
            <p class="lead">We'd love to hear from you! Reach out anytime.</p>
        </div>
    </section>

    <section class="container mb-5">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="contact-card card h-100 text-center p-4">
                    <div class="card-body">
                        <i class="bi bi-geo-alt-fill contact-icon"></i>
                        <h3 class="h5">Our Location</h3>
                        <p class="text-muted">123 Business Avenue<br/>New York, NY 10001</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="contact-card card h-100 text-center p-4">
                    <div class="card-body">
                        <i class="bi bi-telephone-fill contact-icon"></i>
                        <h3 class="h5">Phone Number</h3>
                        <p class="text-muted">+1 (555) 123-4567<br/>Mon-Fri, 9am-5pm EST</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="contact-card card h-100 text-center p-4">
                    <div class="card-body">
                        <i class="bi bi-envelope-fill contact-icon"></i>
                        <h3 class="h5">Email Address</h3>
                        <p class="text-muted">info@company.com<br/>support@company.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mb-5">
        <div class="row g-5">
            <div class="col-lg-6">
                <div class="card shadow-sm">
                    <div class="card-header bg-primary text-white">
                        <h2 class="h5 mb-0">Send Us a Message</h2>
                    </div>
                    <div class="card-body">
                        <form id="contactForm" novalidate>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" required/>
                                <div class="invalid-feedback">
                                    Please provide your name.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid email.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number (Optional)</label>
                                <input type="tel" class="form-control" id="phone"/>
                            </div>
                            
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <select class="form-select" id="subject" required>
                                    <option value="" selected disabled>Select a subject</option>
                                    <option>General Inquiry</option>
                                    <option>Support Request</option>
                                    <option>Feedback</option>
                                    <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a subject.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter your message.
                                </div>
                            </div>
                            
                            <div class="d-grid">
                                <button class="btn btn-primary btn-lg" type="submit">
                                    <i class="bi bi-send-fill me-2"></i>Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="card shadow-sm h-100">
                    <div class="card-header bg-light">
                        <h2 class="h5 mb-0">Our Location</h2>
                    </div>
                    <div class="card-body p-0">
                        <div class="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018687!2d-73.9881174245386!3d40.74844097138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689872162568!5m2!1sen!2sus" 
                                    width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="p-4">
                            <h3 class="h6">Business Hours</h3>
                            <ul class="list-unstyled">
                                <li class="d-flex justify-content-between py-1">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 5:00 PM</span>
                                </li>
                                <li class="d-flex justify-content-between py-1">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 2:00 PM</span>
                                </li>
                                <li class="d-flex justify-content-between py-1">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mb-5">
        <div class="text-center mb-4">
            <h2 class="h3">Frequently Asked Questions</h2>
            <p class="text-muted">Find quick answers to common questions</p>
        </div>
        
        <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        How can I track my order?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        You can track your order by logging into your account and visiting the "My Orders" section. 
                        You'll receive a tracking number via email once your order ships.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        What are your payment options?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. 
                        All transactions are securely processed.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        What is your return policy?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        We offer a 30-day return policy for most items. Items must be in original condition with all tags attached. 
                        Please contact our support team to initiate a return.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>


    </>)
}

export default Contact;