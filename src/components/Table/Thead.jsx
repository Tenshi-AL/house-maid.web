import React, {useEffect, useState} from "react";

const Thead = ({products}) => {
    const [collumns,setCollumns]=useState();
    //Object.getOwnPropertyNames(products[1]);
    useEffect(()=>{
        setCollumns(Object.getOwnPropertyNames(products[1]));
    },[])

    return(
        <thead className="table-secondary">
        <tr>
        </tr>
        </thead>
    )
}

export default Thead;