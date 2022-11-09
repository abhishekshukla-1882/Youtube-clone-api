import React, { useEffect } from 'react'
// import { useEffect } from 'react';

const [mostPopular, setMostPopular] = ({})
function Content() {
    function handleResponce() {

        // e.preventDefault();
        // const newrecord = { ...MultiInput, id: new Date().getTime().toString() };
        var requestOptions = {
            method: 'GET',
        };
        let url = localStorage.getItem('url');
        fetch(url, requestOptions).then(response => response.json()).then(response => {
            if (response) {

                console.log('aya', response);
                setMostPopular(response);
                // setTest(response['data']);
                // setColData(response['data'])

            }
            // setState
        }).catch(err => console.error(err));

    }
    useEffect(() => {
        handleResponce()
    }, []);
    return (
        <div>
            <div className="w3-container w3-teal">
                <h1>My Page</h1>
            </div>
            <div className='row'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{mostPopular.items}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>

            </div>
            <button onClick={handleResponce}>content</button>
        </div>
    )
}

export default Content