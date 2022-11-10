
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import IframeContent from './component/IframeContent';
import { useEffect, useState } from 'react';
function App() {
  const [search, setsearch] = useState("");

  useEffect(()=>{
    console.log('hit',search)
  },[search])
  return (
    <div className="App">
      <Header setSearch = {setsearch}/>
      <>
        <div
          className="w3-sidebar w3-light-grey w3-bar-block mt-2"
          style={{ width: "25%" }}
        >
         <Sidebar />
        </div>
        {/* Page Content */}
        <div  className='mt-2' style={{ marginLeft: "25%" }}>
          <Content search={search} />
        </div>
      </>


      
    </div>
  );
}

export default App;
