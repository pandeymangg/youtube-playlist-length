import React from 'react'

function PlayList(props) {

    let [minutes1, seconds1] = [parseInt((props.response.duration / (1.25)) / 60), parseInt((props.response.duration / (1.25)) % 60)]
    let hours1 = parseInt(minutes1 / 60)
    minutes1 = parseInt(minutes1 % 60)

    let [minutes2, seconds2] = [parseInt((props.response.duration / (1.50)) / 60), parseInt((props.response.duration / (1.50)) % 60)]
    let hours2 = parseInt(minutes2 / 60)
    minutes2 = parseInt(minutes2 % 60)

    let [minutes3, seconds3] = [parseInt((props.response.duration / (1.75)) / 60), parseInt((props.response.duration / (1.75)) % 60)]
    let hours3 = parseInt(minutes3 / 60)
    minutes3 = parseInt(minutes3 % 60)

    let [minutes4, seconds4] = [parseInt((props.response.duration / (2)) / 60), parseInt((props.response.duration / (2)) % 60)]
    let hours4 = parseInt(minutes4 / 60)
    minutes4 = parseInt(minutes4 % 60)

    return (
        <div className="col s12 m7 container">
            <div className="card horizontal" >
                <div className="card-image left valign-wrapper center-align " >
                    <img style={{ marginLeft: '5%' }} alt="thumbnail" src={props.response.thumbs[0].medium.url} ></img>
                </div>
                <div style={{ marginLeft: '2%' }} className="card-stacked" >
                    <div className="card-content" >

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >Title</span>: {props.response.title}
                        </h6>

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >Number of videos</span>: {props.response.numberOfVideos}
                        </h6>

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >Total duration</span>: { props.response.hours > 0 ? `${props.response.hours} hours`  : ''} {props.response.minutes} minutes {props.response.seconds} seconds
                        </h6>

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >At 1.25x</span>: {hours1 ? `${hours1} hours`: ''} {minutes1} mintues {seconds1} seconds
                        </h6>

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >At 1.50x</span>: {hours2 ? `${hours2} hours`: ''} {minutes2} minutes {seconds2} seconds
                        </h6>

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >At 1.75x</span>: {hours3 ? `${hours3} hours`: ''} {minutes3} minutes {seconds3} seconds
                        </h6>

                        <h6 style={{ fontFamily: 'Noto Sans JP, sans-serif' }} >
                            <span style={{ fontWeight: 'bold' }} >At 2x</span>: {hours4 ? `${hours4} hours`: ''} {minutes4} minutes {seconds4} seconds
                        </h6>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayList