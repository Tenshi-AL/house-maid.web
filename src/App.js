import './App.css';
import SideBar from "./components/SideBar";
import {useState} from "react";
import classNames from "classnames";

function App() {
    const [sideBarIsHide,setHide] = useState(false);
    const [sideBarMouseOver, setMouseOver] = useState(false);
    const menuItems = [
        {itemName: 'Test item-1', itemButtons:['btn-1','btn-2']},
        {itemName: 'Test item-2', itemButtons:['btn-1','btn-2']},
        {itemName: 'Test item-3', itemButtons:['btn-1','btn-2']},
    ]

    function onClickHandler(e){
        setHide(!sideBarIsHide);
        console.log(sideBarIsHide);
    }
    function  onMounseOverHandler(e){
        setMouseOver(true);
        console.log(sideBarIsHide,sideBarMouseOver);
    }

    function onMouseOutHandler(){
        setMouseOver(false);
        console.log(sideBarIsHide,sideBarMouseOver);
    }

  return (
        <div className = {classNames("wrapper",
            {
                'toggled':sideBarIsHide,
                'sidebar-hovered':sideBarMouseOver && sideBarIsHide,
            })}>
            <SideBar menuItems={menuItems} onHideHandler={onClickHandler} onMounseOverHandler={onMounseOverHandler}
            onMouseOutHandler={onMouseOutHandler}/>
        </div>
  );
}

export default App;
