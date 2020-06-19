import React, { useState } from 'react';
import Form from './Components/Form/Form';
import Receipts from './Components/Receipts/Reciepts';
import receipts from './data';
import './App.css';

function App() {
  const [receipt, setReceipt] = useState(receipts);


  return (
    <div className="App">
      <h1 className="app-name">Korilla Receipts</h1>
      <Form />
      <Receipts />
    </div>
  );
}

export default App;
