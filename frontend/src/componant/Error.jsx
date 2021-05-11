import React from 'react'
import {NavLink }from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-10 m-auto text-center">
                    <h1>Sorry page not found </h1>
            <h1 className="error">404</h1>
            
            <NavLink to="/"  className="btn btn-primary">Back to Home Page</NavLink>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Error
