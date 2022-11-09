import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
function Sidebar() {
  return (
    <div>
         <h3 className="w3-bar-item">Menu</h3>
          <a href="#" className="w3-bar-item w3-button">
            <HomeIcon/> Home
          </a>
          <a href="#" className="w3-bar-item w3-button">
           <ElectricBoltIcon/> Shorts
          </a>
          <a href="#" className="w3-bar-item w3-button">
           <SubscriptionsIcon/> Subscriptions
          </a>
{/*          
          <a href="#" className="w3-bar-item w3-button">
            Link 3
          </a> */}
          <div className='break'>
              <hr/>
          </div>
          <a href="#" className="w3-bar-item w3-button">
          <LibraryAddIcon/> Library
          </a>
          <a href="#" className="w3-bar-item w3-button">
          <ManageHistoryIcon/> History
          </a>
    </div>




  )
}

export default Sidebar