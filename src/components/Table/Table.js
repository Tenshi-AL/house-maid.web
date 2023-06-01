import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Thead from "./Thead";
import {useMemo} from "react";
import {useTable} from "react-table";
const Table = ({products}) => {
    const [columns,setColumns] =useState();
    const [data,setData] = useState();

    useEffect(()=>{
        //setColumns(Object.getOwnPropertyNames(products.values()));
        console.log(Object.getOwnPropertyNames(products.val))
    },[])

    return(
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Customer Details</h5>
                    <form className="ms-auto position-relative">
                        <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <ion-icon name="search-sharp" role="img" className="md hydrated"
                                      aria-label="search sharp"></ion-icon>
                        </div>
                        <input className="form-control ps-5" type="text" placeholder="search"/>
                    </form>
                </div>
                <div className="table-responsive mt-3">


                    <table className="table align-middle">

                        <thead className="table-secondary">
                        <tr>
                        </tr>
                        </thead>

                        <tbody>

                            <tr>
                                {/*{Object.values(item).map((item)=><td>{item}</td>)}*/}
                            </tr>

                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

Table.propTypes={
    products:PropTypes.array
}

export default Table;