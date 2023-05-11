import React from "react";
import ProductCard from "./ProductCard";

const ProductWrapper = () => {
    return(
        <div className="product-wrapper">
            <div className="card">
                <div className="card-body">
                    <div className="position-relative">
                        <input type="text" className="form-control ps-5" placeholder="Search Product..."/>
                        <span className="position-absolute top-50 product-show translate-middle-y"/>
                        {/*<ion-icon name="search-sharp" className="ms-3 fs-6"></ion-icon></span>*/}
                    </div>

                    <div className="product-grid">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductWrapper;