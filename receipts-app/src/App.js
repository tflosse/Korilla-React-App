import React, { useState } from 'react';
import NewOrder from "./Components/Form/NewOrder";
import Form from './Components/Form/Form';
import Receipts from './Components/Receipts/Receipts';
import receipts from './data';
import './App.css';

export default function App () {
  const [receiptList,setReceiptList] = useState(receipts);
  const [nameSearch,setNameSearch] = useState("");
  const [paid, setPaid] = useState([]);

  const handleInput = event => {
      setNameSearch(event.target.value);
      console.log(nameSearch)
  };

  const handleSearch = event => {
      event.preventDefault();
      console.log("Fetching receipts for "+ nameSearch);
      let filteredReceipts = [];
      receipts.map(receipt => {
        if (nameSearch === receipt.person) {
          filteredReceipts.push(receipt);
          setReceiptList(filteredReceipts)
        } else if (nameSearch === " ") {
          setReceiptList(receipts)
        } // to return to all receipts after a filtered search
      });
      setNameSearch("");
  };

  const handlePaidToggle = receipt =>{
    const paidArray = [...paid];
    const receiptIndex = paidArray.indexOf(receipt);
    if (receiptIndex > -1){
      paidArray.splice(receiptIndex,1);
    } else {
      paidArray.push(receipt);
    }
    setPaid(paidArray);
  };

  return (
    <div className="App">
      <h1 className="app-name">Korilla Receipts</h1>
      <Form handleInput={handleInput} handleSearch={handleSearch} nameSearch={nameSearch}/>
      <NewOrder />
      <Receipts receipts={receiptList} 
      paid={paid}
      onPaidToggle={handlePaidToggle}
      />
    </div>
  );
}


