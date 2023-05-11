import React from "react";
import ShopPageSettingsPanel from "./ShopPageSettingsPanel";
import FilterSideBar from "./FilterSideBar";
import ProductWrapper from "./ProductWrapper";

const ShopPage = () => {
    return(
        <section className="shop-page">
            <div className="shop-container">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <div className="row">

                            <div className="col-12">
                                <ShopPageSettingsPanel/>
                            </div>

                            <div className="col-12 col-xl-3">
                                <div className="btn-mobile-filter d-xl-none"><i className='bx bx-slider-alt'></i>
                                </div>
                                <FilterSideBar/>
                            </div>

                            <div className="col-12 col-xl-9">
                                <ProductWrapper/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ShopPage;