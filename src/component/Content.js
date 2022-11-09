import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react';

function Content() {
    const [mostPopular, setMostPopular] = useState({});
    function handleResponce() {

        // e.preventDefault();
        // const newrecord = { ...MultiInput, id: new Date().getTime().toString() };
        var requestOptions = {
            method: 'GET',
        };
        let url = localStorage.getItem('url');
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBloaji-5YAewRiumRNRt6gpZIZrry5VbY&maxResults=10&part=snippet&type=video&q=143", requestOptions).then(response => response.json()).then(response => {
            if (Object.keys(response).length > 0) {

                console.log('aya', response);
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

    useEffect(() => {
        console.log('data1', mostPopular.items)
    }, [mostPopular]);
    return (
        <div>
            <div className="w3-container w3-teal">
                <h1>My Page</h1>
            </div>
            <div className='row'>
                {
                ( mostPopular?.items?.length>0&& mostPopular.items).map((data) => {
                    console.log('abc1',data)
                   return <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={data?.snippet?.thumbnails?.medium?.url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                            {data?.snippet?.thumbnails?.title} 
                                
                            </h5>
                            <p className="card-text">
                            {data?.snippet?.description }.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                })}

            </div>
            <button onClick={handleResponce}>content</button>
        </div>
    )
}

export default Content