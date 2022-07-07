
import './App.css';

import FirstFetch from  './Fetch/FirstFetch';
import Box from './Fetch/Box'
import Router from './Fetch/Router';
import{Route,Routes} from "react-router-dom";
import BigCard from './BigCard';
function App() {
  return (<div >
    <Routes>
    <Route path="/Bigcard" element={<BigCard/>}/>
    </Routes>
    <div >
      <div >
      <FirstFetch/>
      </div>
  
  {/* <Router/> */}
  
    </div>
    
   
    </div>
    
  );
}

export default App;
