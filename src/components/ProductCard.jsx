import React from "react";

const ProductCard = () => {
    return(
        <div className="card product-card">
            <div className="d-flex align-items-center justify-content-end gap-3 position-absolute end-0 top-0 m-3">
                <a href="javascript:;">
                    <div className="product-wishlist"><i className="bx bx-heart"></i>
                    </div>
                </a>
            </div>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="p-3">
                        <img src="https://via.placeholder.com/400X300/212529/fff" className="img-fluid" alt="..."/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="product-info">
                            <a href="javascript:;">
                                <p className="product-catergory font-13 mb-1">Catergory Name</p>
                            </a>
                            <a href="ecommerce-product-details.html">
                                <h6 className="product-name mb-2">Product Short Name</h6>
                            </a>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex align-items-center">
                                <div className="mb-1 product-price"><span
                                    className="me-1 text-decoration-line-through">$99.00</span>
                                    <span className="fs-5">$49.00</span>
                                </div>
                                <div className="cursor-pointer ms-auto"><i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                </div>
                            </div>
                            <div className="product-action mt-2">
                                <div className="d-flex gap-2">
                                    <a href="javascript:;" className="btn btn-dark btn-ecomm"> <i
                                        className="bx bxs-cart-add"></i>Add to Cart</a>
                                    <a href="javascript:;" className="btn btn-light btn-ecomm"> <i
                                        className='bx bx-shopping-bag'></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;