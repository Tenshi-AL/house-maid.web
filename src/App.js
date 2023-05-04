import './App.css';
import SideBar from "./components/SideBar";
import {useState} from "react";
import classNames from "classnames";
function App() {
    const [sideBarIsHide,setHide] = useState(false);
    const [sideBarMouseEnter, setMouseEnter] = useState(false);
    function onClickHandler(e){
        setHide(!sideBarIsHide);
        console.log(sideBarIsHide);
    }
    function  onMounseEnterHandler(e){
        setMouseEnter(!sideBarMouseEnter);
    }


  return (

    <div className="App">
        <div className = {classNames("wrapper",
            {
                'wrapper toggled':sideBarIsHide,
                'wrapper toggled sidebar-howered':sideBarMouseEnter
            })}>
            <SideBar onHide={onClickHandler} onMouseEnterHandler={onMounseEnterHandler}/>
        </div>
    </div>
  );
}

export default App;
