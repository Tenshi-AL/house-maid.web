import React from "react";
import {useSelector} from "react-redux";

const PageBreadcrumb = ({itemName,buttonsName}) => {
    const title = useSelector((state)=> state);

    return(
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div className="breadcrumb-title pe-3">{title}</div>
            <div className="ps-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0 align-items-center">
                        <li className="breadcrumb-item"><a href="javascript:;">
                            <ion-icon name="home-outline" role="img" className="md hydrated"
                                      aria-label="home outline"></ion-icon>
                        </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{buttonsName}</li>
                    </ol>
                </nav>
            </div>
            {/*<div className="ms-auto">*/}
            {/*    <div className="btn-group">*/}
            {/*        <button type="button" className="btn btn-outline-dark">Settings</button>*/}
            {/*        <button type="button"*/}
            {/*                className="btn btn-outline-dark split-bg-dark dropdown-toggle dropdown-toggle-split"*/}
            {/*                data-bs-toggle="dropdown"><span className="visually-hidden">Toggle Dropdown</span>*/}
            {/*        </button>*/}
            {/*        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"><a className="dropdown-item"*/}
            {/*                                                                                   href="javascript:;">Action</a>*/}
            {/*            <a className="dropdown-item" href="javascript:;">Another action</a>*/}
            {/*            <a className="dropdown-item" href="javascript:;">Something else here</a>*/}
            {/*            <div className="dropdown-divider"></div>*/}
            {/*            <a className="dropdown-item" href="javascript:;">Separated link</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default PageBreadcrumb;