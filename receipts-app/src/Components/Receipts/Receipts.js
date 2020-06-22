import React from 'react';
import Receipt from './Receipt';

const Receipts = (props) => {

    const allReceipts = props.receipts.map((receipt, i) => {
        return (
            <Receipt 
            name={receipt.person} key={receipt.id} id={receipt.id} main={receipt.order.main}
            protein={receipt.order.protein} rice={receipt.order.rice} sauce={receipt.order.sauce} drink={receipt.order.drink}
            cost={receipt.order.cost}
            onPaidToggle={() => props.onPaidToggle(receipt)}
            isPaid={props.paid.includes(receipt)}
            />
        );
    });

    return (
        <div className='container'>
            {allReceipts}
        </div>
    );
};

export default Receipts;