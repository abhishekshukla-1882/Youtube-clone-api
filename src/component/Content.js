import React, { useEffect, useState } from 'react'
import IframeContent from './IframeContent';

// import { useEffect } from 'react';

let x = Math.floor(Math.random() * 999);

function Content() {
    const [mostPopular, setMostPopular] = useState({});
    const [videoId, setVideoId] = useState();
    function handleResponce() {

        // e.preventDefault();
        // const newrecord = { ...MultiInput, id: new Date().getTime().toString() };
        var requestOptions = {
            method: 'GET',
        };
        // let url = localStorage.getItem('url');AIzaSyBloaji-5YAewRiumRNRt6gpZIZrry5VbY
        let url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHi1IRNAtudLEHveNEwFvIGiq6QHj739o&maxResults=10&part=snippet&type=video&q=145";
        console.log(url);
        fetch(url, requestOptions).then(response => response.json()).then(response => {
            if (Object.keys(response).length > 0) {

                console.log('aya', response);
                console.log("xxx", x);
                setMostPopular({ ...response });
                // setTest(response['data']);
                // setColData(response['data'])

            }
            // setState
        }).catch(err => console.error(err));

    }
    useEffect(() => {
        handleResponce()
    }, []);
    const sendId = (id) => {
        setVideoId(id);
    }
    useEffect(() => {
        console.log('data1', mostPopular.items)
    }, [mostPopular]);
    return (<>

        <div className="w3-container w3-teal">
            <h1>My Page</h1>
        </div>
        <div>
            <IframeContent video={videoId} />
        </div>
        <div>

            <div className='row'>
                {
                    mostPopular?.items?.length > 0 && mostPopular.items.map((data) => {
                        console.log('abc1', data)
                        return <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={data?.snippet?.thumbnails?.medium?.url} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {data?.snippet?.thumbnails?.title}

                                </h5>
                                <p className="card-text">
                                    {data?.snippet?.description}.
                                </p>
                                <button onClick={(()=>{
                                    sendId(data.id.videoId)
                                })}>
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    })}

            </div>
            <button onClick={handleResponce}>content</button>
        </div>
    </>
    )
}

export default Content