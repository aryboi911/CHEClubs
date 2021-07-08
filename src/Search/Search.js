import React from 'react';
import styles from './Search.module.css';

export function Search(){
    return(
        <div>
            <div className = {styles.search}>   
                <form className= "box">
                    <div className="field has-addons">
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Club Name..."/>
                    </p>
                    <p className="control">
                    <button className={"button"}>
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