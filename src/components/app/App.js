import React from 'react';
import './App.css';
import Header from '../header';
import Main from '../main';
import PageFirst from '../page-first';
import PageSecond from '../page-second';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header/>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/first" element={<PageFirst />} />
          <Route path='/first/second' element={<PageSecond />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;