import React from "react";

const FilterSideBar = () => {
    return(
        <div className="filter-sidebar d-none d-xl-flex">
            <div className="card w-100">
                <div className="card-body">
                    <div className="align-items-center d-flex d-xl-none">
                        <h6 className="text-uppercase mb-0">Filter</h6>
                        <div className="btn-mobile-filter-close btn-close ms-auto cursor-pointer"></div>
                    </div>
                    <hr className="d-flex d-xl-none"/>
                    <div className="product-categories">
                        <h6 className="text-uppercase mb-3">Categories</h6>
                        <ul className="list-unstyled mb-0 categories-list">
                            <li><a href="javascript:;">Clothings <span
                                className="float-end badge rounded-pill bg-dark">42</span></a>
                            </li>
                            <li><a href="javascript:;">Sunglasses <span
                                className="float-end badge rounded-pill bg-dark">32</span></a>
                            </li>
                            <li><a href="javascript:;">Bags <span
                                className="float-end badge rounded-pill bg-dark">17</span></a>
                            </li>
                            <li><a href="javascript:;">Watches <span
                                className="float-end badge rounded-pill bg-dark">217</span></a>
                            </li>
                            <li><a href="javascript:;">Furniture <span
                                className="float-end badge rounded-pill bg-dark">28</span></a>
                            </li>
                            <li><a href="javascript:;">Shoes <span
                                className="float-end badge rounded-pill bg-dark">145</span></a>
                            </li>
                            <li><a href="javascript:;">Accessories <span
                                className="float-end badge rounded-pill bg-dark">15</span></a>
                            </li>
                            <li><a href="javascript:;">Headphones <span
                                className="float-end badge rounded-pill bg-dark">8</span></a>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                        <div className="price-range">
                            <h6 className="text-uppercase mb-3">Price</h6>
                            <div className="my-4" id="slider"></div>
                            <div className="d-flex align-items-center">
                                <button type="button"
                                        className="btn btn-dark btn-sm text-uppercase rounded font-13 fw-500">Filter
                                </button>
                                <div className="ms-auto">
                                    <p className="mb-0">Price: $200 - $900</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                </div>
            </div>
        </div>
    );
}

export default FilterSideBar;