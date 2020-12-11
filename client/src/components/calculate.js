import React from 'react'
import axios from 'axios'

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

            if (response.data.data !== response) {
                setResponse(response.data.data)
            }
        }

        getResponse()

        console.log('mounted...')
    }, [idCopy])

    let duration = null

    if (response) {
        let [minutes, seconds] = [ parseInt(response.data.data.duration / 60), parseInt(response.data.data.duration % 60) ]
        let hours = parseInt(minutes / 60)
        minutes = parseInt(minutes % 60)

        duration = (
            <div>
                <p>
                    { `Total Length: ${hours} hours ${minutes} minutes ${seconds} seconds` }
                </p>
            </div>
        )

    }

    return (
        <>
            {duration}
        </>
    )
}

export default Calculate