import React, {useState} from "react";
import PropTypes from "prop-types";
import SidebarMenu from "./SidebarMenu";
import SidebarHeader from "./SidebarHeader";

const SideBar  = ({menuItems, onHideHandler, onMounseOverHandler, onMouseOutHandler}) => {

    return(
        <aside className="sidebar-wrapper" data-simplebar="true" onMouseOver={onMounseOverHandler}
        onMouseOut={onMouseOutHandler}>
            <SidebarHeader onHideHandler={onHideHandler}/>
            <SidebarMenu menuItems={menuItems}/>
        </aside>
    );
}

SideBar.propTypes ={
    onHideHandler: PropTypes.func,
    onMounseOverHandler:PropTypes.func,
    onMouseOutHandler:PropTypes.func,
};

export  default  SideBar;