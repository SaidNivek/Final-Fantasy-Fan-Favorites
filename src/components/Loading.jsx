import React from 'react'

const Loading = () => {
    return (
        <div className="row d-flex justify-content-center text-center">
            <h2 className="col-12">Getting the fantasies...</h2>
            <hr></hr>
            <i className="fa-solid fa-dragon fa-4x fa-spin"></i>
        </div>
    );
}

export default Loading
