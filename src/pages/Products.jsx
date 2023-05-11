import React from "react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ShopPage from "../components/ShopPage";

const Products = () => {
    return(
      <div className="page-content-wrapper">
          <div className="page-content">
              <PageBreadcrumb/>
              <ShopPage/>
          </div>
      </div>
    );
}

export default Products;