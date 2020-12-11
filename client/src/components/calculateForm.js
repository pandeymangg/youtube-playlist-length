import React from 'react'

function CalculateForm(props) {

    const [inputTerm, setInputTerm] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.calculateFormSubmit(inputTerm)
    }

    return(
        <form className="col s6" onSubmit={(e) => handleSubmit(e)} >
            <div className="row" >
                <div className="input-field col s8" >
                    <input type="text" id="calculate-id" onChange={(e) => setInputTerm(e.target.value)} ></input>
                    <label htmlFor="calculate-id" >Playlist link or id</label>
                </div>
            </div>
            <button type="submit" className="btn red waves-effect waves-light
            " disabled={!inputTerm} >Calculate</button>
        </form>
    )
}

export default CalculateForm