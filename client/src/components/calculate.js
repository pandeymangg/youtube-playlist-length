import React from 'react'
import axios from 'axios'
import PlayList from './playlist'
import Spinner from './spinner'

function Calculate(props) {
    const queryParams = new URLSearchParams(props.location.search)
    let idCopy;
    for (let param of queryParams.entries()) {
        if (param[0] === 'id') {
            idCopy = param[1]
        }
    }
    
    const [response, setResponse] = React.useState(null)

    React.useEffect(() => {
        setResponse(null)
        async function getResponse() {
            const response = await axios.post('/api/calculate', {
                id: idCopy
            })

            if(response.data.data !== response) {
                setResponse(response.data.data)
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

    return (
        <>
            { playList }
        </>
    )
}

export default Calculate