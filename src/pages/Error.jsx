import React from "react";

const Error = () => {
    return(
        <div className="card radius-10">
            <div className="row g-0">
                <div className="col-xl-5">
                    <div className="card-body">
                        <h1 className="display-1"><span className="text-warning">5</span><span
                            className="text-danger">0</span><span className="text-primary">0</span></h1>
                        <h2 className="font-weight-bold display-4">Sorry, unexpected error</h2>
                        <p>Looks like you are lost!
                            <br/>May be you are not connected to the internet!</p>
                        <div className="mt-5"><a href="javascript:;"
                                                 className="btn btn-lg btn-primary px-md-5 radius-30">Go Home</a>
                            <a href="javascript:;"
                               className="btn btn-lg btn-outline-dark ms-3 px-md-5 radius-30">Back</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7">
                    <img src="assets/images/error/505-error.png" className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Error;