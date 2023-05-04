import React, {useState} from "react";
import PropTypes from "prop-types";

const SideBar  = ({onHide, onMouseEnterHandler}) => {


    return(
        <aside className="sidebar-wrapper" data-simplebar="true" onMouseEnter={onMouseEnterHandler}>
            <div className="sidebar-header">

                <div>
                    <img src="assets/images/logo-icon-2.png" className="logo-icon" alt="logo icon"/>
                </div>
                <div>
                    <h4 className="logo-text">Blackdash</h4>
                </div>
                <div className="toggle-icon ms-auto" onClick={onHide}>
                    <ion-icon name="menu-sharp"></ion-icon>
                </div>
            </div>

            <ul className="metismenu" id="menu">
                <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon">
                            <i className="bi bi-house-door"></i>
                        </div>
                        <div className="menu-title">Dashboard</div>
                    </a>
                    <ul>
                        <li><a href="index.html">
                            <i className="bi bi-circle"></i>Default
                        </a>
                        </li>
                        <li><a href="index2.html">
                            <i className="bi bi-circle"></i>Alternate
                        </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}

SideBar.propTypes ={
    onHide: PropTypes.func,
    onMouseEnterHandler:PropTypes.func
};

export  default  SideBar;