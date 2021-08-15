import React, { useState } from 'react'
import youtube from '../apis/youtube';



const Searchbar = ({onFormSubmit}) => {
    const [term , setTerm] =useState('')
    const onInputchange = event =>{
        setTerm(event.term.value);

    };

    const onSubmit = event => {
       event.preventDefault();
       onFormSubmit(term);
    };
    return (
        <div className = "search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
            <div className = "field">
                <label style={{fontSize: '20px'}}>Video Search</label>
                <input type = "text" 
                value = {term}
                onChange={onInputchange} />
            </div>
        </form>
    </div>
    )
}

export default Searchbar