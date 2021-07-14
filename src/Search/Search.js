// Renders the search bar for use on the home page

import React, {useState} from 'react';
import styles from './Search.module.css';

// Logs value in the search bar and exports to HomePage.js file for use and addition to URL
export function Search(props){

    const [term, setTerm] = useState(props.term || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term);
        }
        console.log(term);
        e.preventDefault();
    }


    //Renders the search bar with the bar and the search button
    return(
        <div>
            <div className = {styles.search}>   
                <form className= "box" onSubmit={submit}>
                    <div className="field has-addons">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Club Name... (Submit Empty
 to Find Clubs with Other Filters)" value={term}
                            onChange = {(e) => setTerm(e.target.value)}/>
                        </p>
                        <p className="control">
                        <button className={"button"} onClick = {submit}>
                            <div className="icon">
                                <i className="fas fa-search"></i>
                            </div>
                        </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}