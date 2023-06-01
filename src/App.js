import './App.css';
import SideBar from "./components/SideBar/SideBar";
import React, {useEffect, useState} from "react";
import classNames from "classnames";
import Products from "./pages/Products";
import axios, * as others from 'axios';
import {Routes,Route} from "react-router-dom";
import PageBreadcrumb from "./components/PageBreadcrumb";
import ShopPage from "./components/ShopPage";
import ShopPageSettingsPanel from "./components/ShopPageSettingsPanel";
import FilterSideBar from "./components/FilterSideBar";
import ProductWrapper from "./components/ProductWrapper";
import RamsAdmin from "./pages/RamsAdmin";

function App() {
    const [sideBarIsHide,setHide] = useState(false);
    const [sideBarMouseOver, setMouseOver] = useState(false);
    const [activeMenuItem, choiseMenu] = useState(null);
    const [products,SetProducts] = useState([]);

    const menuItems =
        [{itemName:'Dev button', itemButtons:[{buttonsName:'ramsPage',link:'rams'},{buttonsName:'Rams Crud',link:'ramsSetting'},]
        }]


    const getData = () =>{
        //const axios = require('axios');
        axios.get('https://localhost:7281/Ram')
            .then((response)=>
            {
                SetProducts(response.data);
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

            <div className="page-content-wrapper">
                <div className="page-content">
                    <SideBar menuItems={menuItems} onHideHandler={onClickHandler} onMounseOverHandler={onMounseOverHandler} onMouseOutHandler={onMouseOutHandler} MenuItemClick={onMenuItemClickHandler} activeMenu={activeMenuItem}/>
                    <PageBreadcrumb/>
                    <Routes>
                        <Route path="/rams" element ={<Products products={products}/>}/>
                        <Route path="/ramsSetting" element={<RamsAdmin products={products}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
  );
}

export default App;
