import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductWrapper = ({products}) => {
    console.log(products);
    return(
        <div className="col-12 col-xl-9">
            <div className="product-wrapper">
                <div className="card">
                    <div className="card-body">
                        <div className="position-relative">
                            <input type="text" className="form-control ps-5" placeholder="Search Product..."/>
                            <span className="position-absolute top-50 product-show translate-middle-y"/>
                            {/*<ion-icon name="search-sharp" className="ms-3 fs-6"></ion-icon></span>*/}
                        </div>

                        <div className="product-grid">
                            {
                                products.map((item,key)=>(<ProductCard key={item.name+key} CatergoryName="Processor" ProductShortName={item.model} Description={item.id} Price={item.priceWithDiscount}/>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductWrapper.propTypes={
    products:PropTypes.array
}

export default ProductWrapper;