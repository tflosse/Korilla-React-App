import React from 'react';

const Form = (props) => {
    return (
    <div className="search">
        <form onSubmit={props.handleSearch}>
            <label htmlFor="new-search">Search for... </label>
            <input type="text" placeholder="Search by Name" id="new-search" value={props.nameSearch}
            onChange={props.handleInput}/>
            <input type="submit" className="submit-button"/>
        </form>
    </div>
    )
} 

export default Form;