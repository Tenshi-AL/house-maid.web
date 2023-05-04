import React from "react";
import MenuItem from "./MenuItem";

const SidebarMenu = ({menuItems}) =>{
    return(
        <ul className="metismenu" id="menu">
            {menuItems.map(i=>
            <MenuItem title={i.itemName} buttons={i.itemButtons}/>
            )}
        </ul>
    );
}

export  default  SidebarMenu;