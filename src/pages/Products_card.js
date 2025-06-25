import { Link } from "react-router-dom";

function Products_card(props){

    return(<>


        <div className="col-lg-3 col-md-6 col-mb-4 mb-5 ">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="badge bg-danger position-absolute mt-2 ms-2">Sale</div>
                <div className="position-relative overflow-hidden">
                    <img src={props.data.product_img} className="card-img-top" alt="Product Image"/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                       <Link to={`/product_det/${props.data.product_tbl_id}`}><button className="btn btn-dark btn-quick-view">Quick View</button></Link> 
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Sneakers</span>
                        <div className="text-warning">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    <h5 className="card-title mb-1">{props.data.product_name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <span className="text-decoration-line-through text-muted me-2">$129.99</span>
                            <span className="fw-bold text-danger">${props.data.price}</span>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Products_card;