import React from 'react'

function ErrorComp(props) {
    let message = null

    if (props.error.data.message === `Cannot read property 'snippet' of undefined`) {
        message = (
            <div className="col s12 m7 container">
                <h2 className="header red-text ">Error!</h2>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="flow-text" >The playlist with id <span className="red-text lighten-2" >{props.id}</span> is not found. Please try again with a different id!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        message = (
            <div className="col s12 m7 container">
                <h2 className="header red-text ">Error!</h2>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="flow-text" >{ props.error.data.message }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { message }
        </>
    )
}

export default ErrorComp