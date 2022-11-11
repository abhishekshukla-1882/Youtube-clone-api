import React, { useEffect, useState } from 'react'
import IframeContent from './IframeContent';

// import { useEffect } from 'react';
var i =0

let x = Math.floor(Math.random() * 999);

function Content(props) {
    console.log("props",props.search);
    const [mostPopular, setMostPopular] = useState({});
    const [urt, setUrt] = useState("145");
    const [videoId, setVideoId] = useState();
    // console.log("search",search)
  
    function handleResponce() {

        // e.preventDefault();
        // let url = "";
        console.log("hann",props.search)
        // const newrecord = { ...MultiInput, id: new Date().getTime().toString() };
        var requestOptions = {
            method: 'GET',
        };
        // if(props.search !== undefined){
        //     let sea = props.search;
        //     console.log("dddd",sea);
        //     url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCntCSP6aZeGrmPDAaxG0FDr4npIeOHpAg&maxResults=10&part=snippet&type=video&q="+sea;
        //     console.log("utl",url)
        // }else{

        //     url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCntCSP6aZeGrmPDAaxG0FDr4npIeOHpAg&maxResults=10&part=snippet&type=video&q="+x;
        // }
        let url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBbWCubWQ6bnDzYYU9tj4Nk-Fdtn0LOaTk&maxResults=10&part=snippet&type=video&q="+urt;


        // }
        let url2 = localStorage.getItem('url');
        // AIzaSyBloaji-5YAewRiumRNRt6gpZIZrry5VbY
        // consolelog(url);
        console.log("urllllll=>",url);

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
    function Gethandle() {

        useEffect(() => {
            handleResponce()
        }, []);
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
    if(props.search !== undefined){
        // handleResponce()
        // Gethandle()
        setUrt(props.search);
        i +=1;
        console.log("iiii",i)
        
    }
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