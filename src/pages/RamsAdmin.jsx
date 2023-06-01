import React from "react";
import PropTypes from "prop-types";
import Table from "../components/Table/Table";

const RamsAdmin = ({products}) =>{
    return(
        <div className="rams-admin-panel">
            {/*<Table products={products}/>*/}
        </div>
    );
}

RamsAdmin.propTypes={
    products:PropTypes.array
}

export default RamsAdmin;