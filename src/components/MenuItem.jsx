import React, {useState} from "react";
import classNames from "classnames";

const MenuItem = ({title, buttons}) =>{
    const [isActive, setActive] = useState(false);

    function onHrefClickHandler(e){
        setActive(!isActive);
    }

    return(
        <li className={classNames('',{
            'mm-active':isActive
        })}>
            <a href="javascript:;" className="has-arrow" aria-expanded={isActive} onClick={onHrefClickHandler}>
                <div className="parent-icon">
                    <i className="bi bi-house-door"></i>
                </div>
                <div className="menu-title">{title}</div>
            </a>

            <ul className={classNames('mm-collapse',
                {
                    'mm-show':isActive
                })}>
                {buttons.map(b=>
                    <li>
                        <a href="index.html"><i className="bi bi-circle"></i>{b}</a>
                    </li>
                )}
            </ul>

        </li>
    );
}

export  default  MenuItem;