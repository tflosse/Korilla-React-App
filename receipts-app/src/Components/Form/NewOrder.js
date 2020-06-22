import React from "react";

const NewOrder = () => {
    // Insert functions for date and time,
    // to assign an order number,
    // and to calculate cost here once prices of menu items are defined.
    return(
        <div className="create-new">
            <form>
                <label htmlFor="new-order">New order:</label>
                <br />
                <input type="text" placeholder="Name" id="new-order"/> <br />
                <input type="text" placeholder="Order" /> <br />
                <label htmlFor="order-details">Order details</label> <br />
                <input type="text" placeholder="Protein" /> 
                <input type="text" placeholder="Rice" /> <br />
                <input type="text" placeholder="Sauce" /> 
                <input type="text" placeholder="Drink" /> <br />
                <p className="order-cost"> Total cost of new order: $ ____ </p>
                <input type="submit" className="submit-button"/>
            </form>
        </div>
    )
};

export default NewOrder;