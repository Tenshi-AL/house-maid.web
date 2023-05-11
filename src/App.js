import './App.css';
import SideBar from "./components/SideBar";
import {useState} from "react";
import classNames from "classnames";
import Products from "./pages/Products";

function App() {
    const [sideBarIsHide,setHide] = useState(false);
    const [sideBarMouseOver, setMouseOver] = useState(false);
    const [activeMenuItem, choiseMenu] = useState(null);

    const menuItems = [
        {itemName: 'Test item-1', itemButtons:['btn-1','btn-2']},
        {itemName: 'Test item-2', itemButtons:['btn-1','btn-2']},
        {itemName: 'Test item-3', itemButtons:['btn-1','btn-2']},
    ]

    //to-do
    //Сделать так, что бы при нажатии на пункт меню
    //ещё раз он закрывался.
    function onMenuItemClickHandler(index){
        // if(activeMenuItem==null) {
        //     choiseMenu(index);
        // }
        // else {
        //     choiseMenu(null);
        // }

        choiseMenu(index);
    }
    function onClickHandler(e){
        setHide(!sideBarIsHide);
    }
    function  onMounseOverHandler(e){
        setMouseOver(true);
    }

    function onMouseOutHandler(){
        setMouseOver(false);
    }

  return (
        <div className = {classNames("wrapper",
            {
                'toggled':sideBarIsHide,
                'sidebar-hovered':sideBarMouseOver && sideBarIsHide,
            })}>
            <SideBar menuItems={menuItems} onHideHandler={onClickHandler} onMounseOverHandler={onMounseOverHandler}
            onMouseOutHandler={onMouseOutHandler} MenuItemClick={onMenuItemClickHandler} activeMenu={activeMenuItem}/>
            <Products/>
        </div>
  );
}

export default App;
