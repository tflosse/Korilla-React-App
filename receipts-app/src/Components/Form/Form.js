import React from 'react';

const Form = (props) => {
    return (
    <div className="search">
        <div>
            <form onSubmit={props.handleSearch}>
                <label htmlFor="new-search">Search for</label>
                <br />
                <input type="text" placeholder="Search by Name" id="new-search" value={props.nameSearch}
                onChange={props.handleInput}/> <br />
                <input type="submit" className="submit-button"/>
            </form>
        </div>

    </div>
    )
} 

export default Form;