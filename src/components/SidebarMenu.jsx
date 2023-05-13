import {Link} from "react-router-dom";

const SidebarMenu = ({menuItems,MenuItemClick,activeMenuItem}) =>{

    function _onClick(activeMenuItem,index){
        MenuItemClick(index)
        console.log(activeMenuItem===index)
    }

    return(
        <ul className="metismenu" id="menu">
            {menuItems.map((item, index)=>(
                <li className={activeMenuItem===index ? 'mm-active':''}>

                    <a href="javascript:;" className="has-arrow"
                       aria-expanded={activeMenuItem===index ? false: true}
                       onClick={()=>_onClick(activeMenuItem,index)}>

                        <div className="parent-icon">
                            <i className="bi bi-house-door"></i>
                        </div>

                        <div className="menu-title">{item.itemName}</div>
                    </a>

                    <ul className={activeMenuItem===index ? 'mm-collapse mm-show':'mm-collapse'}>
                        {item.itemButtons.map((buttons,key)=>
                            <Link to={buttons.link}><a href="index.html"><i className="bi bi-circle"></i>{buttons.buttonsName}</a></Link>
                        )}
                    </ul>

                </li>
            ))}
        </ul>
    );
}

export  default  SidebarMenu;