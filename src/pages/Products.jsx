import React from "react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ShopPage from "../components/ShopPage";
import ShopPageSettingsPanel from "../components/ShopPageSettingsPanel";
import FilterSideBar from "../components/FilterSideBar";
import ProductWrapper from "../components/ProductWrapper";
import PropTypes from "prop-types";

const Products = ({products}) => {
    return(
        <div className="productPage">
              <ShopPage>
                      <ShopPageSettingsPanel/>
                      <FilterSideBar/>
                      <ProductWrapper products={products}/>
              </ShopPage>
        </div>
    );
}

Products.propTypes={
    products:PropTypes.array
}

export default Products;