import React from 'react';
import './App.css';
import './features/numberBox/NumberBox';
import NumberBox from './features/numberBox/NumberBox';
import ScanQR from './features/scanQR/scanQR';

function App() {
  return (
    <div className="App">
       <NumberBox />
       <ScanQR/>
    </div>
  );
}

export default App;



