import React, { useEffect, useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Content from './Content';

function Header(props) {
   console.log(props,'hit')

    return (
        <div >
            <>
                {/* {getsearch()} */}
                <div class="pos-f-t">
                    {/* <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div> */}
                    <nav class="navbar navbar-light bg-light navbar-fixed-top">
                        <span>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>

                            </button>
                            <YouTubeIcon />
                        </span>

                        <div className="wrapper">

                            <div className="searchBar">
                                <input
                                    id="searchQueryInput"
                                    type="text"
                                    name="searchQueryInput"
                                    placeholder="Search"
                                    defaultValue=""
                                />
                                <button id="searchQuerySubmit" type="submit" onClick = {()=>{
                                    props.setSearch(document.getElementById("searchQueryInput").value)
                                }} name="searchQuerySubmit">
                                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                        <path
                                            fill="#666666"
                                            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                        />
                                    </svg>
                                </button>
                                <span><MicIcon /></span>

                            </div>
                        </div>
                        <button className="morevert"><MoreVertIcon /></button>
                        <span>
                            <button
                                id="searchQueryInput"
                                name="searchQueryInput"

                                defaultValue=""><PersonOutlineIcon />SigIn</button>
                        </span>

                    </nav>
                </div>
                {/* Navbar */}
            </>

        </div>
    )
}

export default Header