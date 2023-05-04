import React from "react";

const SidebarHeader = ({onHideHandler}) => {
    return(
        <div className="sidebar-header">

            <div>
                <img src="assets/images/logo-icon-2.png" className="logo-icon" alt="logo icon"/>
            </div>
            <div>
                <h4 className="logo-text">Blackdash</h4>
            </div>
            <div className="toggle-icon ms-auto" onClick={onHideHandler}>
                <ion-icon name="menu-sharp"></ion-icon>
            </div>
        </div>
    );
}

export default SidebarHeader;