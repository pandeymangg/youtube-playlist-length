import React from 'react'
import axios from 'axios'
import PlayList from './playlist'
import Spinner from './spinner'
import ErrorComp from './errorComp'

function Calculate(props) {
    const queryParams = new URLSearchParams(props.location.search)
    let idCopy;
    for (let param of queryParams.entries()) {
        if (param[0] === 'id') {
            idCopy = param[1]
        }
    }
    
    const [response, setResponse] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setResponse(null)
        setError(null)
        async function getResponse() {
            try {
                const response = await axios.post('/api/calculate', {
                    id: idCopy
                })
    
                if(response.data.data !== response) {
                    setResponse(response.data.data)
                }
            } catch(error) {
                setError(error.response)
            }
        }

        getResponse()

        console.log('mounted...')
    }, [idCopy])  

    let playList = (
        <Spinner />
    )

    if(response) {
        playList = (
            <PlayList response={ response } />
        )
    }

    if(error) {
        playList = (
            <ErrorComp error={error} id={idCopy} />
        )
    }

    return (
        <>
            { playList }
        </>
    )
}

export default Calculate