import React from "react";

const ShopPageSettingsPanel = () => {
    return(
        <div className="card">
            <div className="card-body">
                <div className="toolbox d-flex flex-row align-items-center gap-2">
                    <div className="d-flex flex-wrap flex-grow-1 gap-1">
                        <div className="d-flex align-items-center flex-nowrap">
                            <p className="mb-0 font-13 text-nowrap">Sort By:</p>
                            <select className="form-select ms-3">
                                <option value="menu_order" selected="selected">Default sorting
                                </option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by newness</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="d-flex align-items-center flex-nowrap">
                            <p className="mb-0 font-13 text-nowrap">Show:</p>
                            <select className="form-select ms-3">
                                <option>9</option>
                                <option>12</option>
                                <option>16</option>
                                <option>20</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn-group">
                        <a href="ecommerce-shop-grid-view.html"
                           className="btn btn-outline-dark"><i className='bx bxs-grid mx-0'></i></a>
                        <a href="ecommerce-shop-list-view.html" className="btn btn-dark"><i
                            className='bx bx-list-ul mx-0'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopPageSettingsPanel;