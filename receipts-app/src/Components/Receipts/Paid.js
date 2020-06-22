import React from 'react';

const Paid = (props) => {
    const handlePaid = (event) => {
        console.log('Handling Paid Click!')
        props.onPaidToggle();
    }
    return (
    <div className={`order-paid ${props.isPaid? " check_box":" check_box_outline_blank"}`}
        onClick={handlePaid}>
        <p className="material-icons">{props.isPaid? "check_box":"check_box_outline_blank"} <br />
        <span>{props.isPaid? "PAID":""}</span></p>
    </div>
    )
}
export default Paid;