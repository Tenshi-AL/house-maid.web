import './App.css';
import SideBar from "./components/SideBar";
import {useEffect, useState} from "react";
import classNames from "classnames";
import Products from "./pages/Products";
import axios, * as others from 'axios';

function App() {
    const [sideBarIsHide,setHide] = useState(false);
    const [sideBarMouseOver, setMouseOver] = useState(false);
    const [activeMenuItem, choiseMenu] = useState(null);
    const [products,SetProducts] = useState([]);

    const menuItems = [
        // {itemName: 'Dev buttons', itemButtons:['rams page','btn-2']},
        {itemName:'Dev button', itemButtons:[
            {buttonsName:'ramsPage',link:'rams'}
            ]}]


    const getData = () =>{
        //const axios = require('axios');
        axios.get('https://localhost:7281/Ram')
            .then((response)=>
            {
                //SetProducts(response);
                console.log('useEffect',response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    useEffect(()=>{
        getData();
    },[]);

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
