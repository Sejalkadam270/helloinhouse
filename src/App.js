import React from 'react';
import './App.css';
import DataFetcher from './Component/DataFetcher';
import Columnfetch from './Component/FetchData';
import Fetcheg from './Component/Fetchg';
import Fetchh from './Component/Fetchh';
import Fetchi from './Component/Fetchi';
import Fetchj from './Component/Fetchj';
import Fetchk from './Component/Fetchk';
import Fetchl from './Component/Fetchl';
import Fetchm from './Component/Fetchm';
import Fetchn from './Component/Fetchn';
import Fetcho from './Component/Fetcho';
import Fetchp from './Component/Fetchp';
import Fetchr from './Component/Fetchr';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerticalNavbar from './Component/VerticalNavbar';
import FetcheData from './Component/FetchData';
import Topnav from './Component/TopNavbar';

function App() {
  return (
    <Router>
    <div className="app-container">
      <Topnav/>
      <VerticalNavbar />
      <div className="content-container">
        <Routes>
          <Route path="/page1" element={<DataFetcher/>} />
          <Route path="/page2" element={<Columnfetch/>} />
          <Route path="/page3" element={<Fetcheg/>} />
          <Route path="/page4" element={<Fetchh/>} />
          <Route path="/page5" element={<Fetchi />} />
          <Route path="/page6" element={<Fetchj/>} />
          <Route path="/page7" element={<Fetchl/>} />
          <Route path="/page8" element={<Fetchm />} />
          <Route path="/page9" element={<Fetchn/>} />
          <Route path="/page10" element={<Fetcho/>} />
          <Route path="/page11" element={<Fetchp/>} />
          <Route path="/page12" element={<Fetchr/>} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}
   
export default App;
/*   <Fetchr/>
        <Fetchq/>
        <Fetcho/>
        <Fetchn/>
        <Fetchm/>
        <Fetchl/>
        <Fetchj/>
        <Fetchi/>
        <Fetchh/>
        <Fetcheg/>
       <Columnfetch/>
       <DataFetcher/> */