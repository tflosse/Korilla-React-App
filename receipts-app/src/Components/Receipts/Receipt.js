import React from 'react';
import Paid from './Paid';

const Receipt= (props) => {
    return (
    <div className="receipt">
        <h2>{props.name}<br />
        # {props.id}</h2>
        <h4>{props.main}</h4>
        <hr />
        <br />
        <div className="order-summary">
            <p>Protein: {props.protein}<br />
            Rice: {props.rice}<br />
            Sauce: {props.sauce}<br />
            Drink: {props.drink}<br /> </p>
        </div>
        <p>Order Total: $ <strong>{props.cost}</strong></p>
        <br />
        <Paid onPaidToggle={() => props.onPaidToggle()} isPaid={props.isPaid}/>
    </div>
    )
} 

export default Receipt;