import React from "react";
import ShopPageSettingsPanel from "./ShopPageSettingsPanel";
import FilterSideBar from "./FilterSideBar";
import ProductWrapper from "./ProductWrapper";

const ShopPage = ({children}) => {
    return(
        <section className="shop-page">
            <div className="shop-container">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <div className="row">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ShopPage;