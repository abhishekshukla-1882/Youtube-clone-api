
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
function App() {
  return (
    <div className="App">
      <Header />
      <>
        <div
          className="w3-sidebar w3-light-grey w3-bar-block mt-2"
          style={{ width: "25%" }}
        >
         <Sidebar />
        </div>
        {/* Page Content */}
        <div  className='mt-2' style={{ marginLeft: "25%" }}>
          <Content />
        </div>
      </>

      {/* <div className='row'>
      <div className='col-2'>
      <Sidebar />

      </div>
      <div className='col-6'>hell</div>

      </div> */}
      
    </div>
  );
}

export default App;
