// This is the Header Section on the "Clubs List" page. It includes the title, "Sort By" button,
// and the list of the clubs 

import React from 'react';
import styles from './Header.module.css';
import {ListOfClubs} from '../ListOfClubs'

export function Header(){
    return(
        <div className="columns is-mobile">
            <div className="column">
                {/*This is the title of the page.*/}
                <div className= {styles['header']}>
                    <h1 className="subtitle is-4"><strong>List of All Clubs</strong></h1>
                {/*This is the "Sort By" dropdown.*/}
                    <div className="field">
                    <p className="control has-icons-left">
                        <span className="select">
                        <select className= "button is-ghost">
                            <option selected>Sort By: Alphabetical</option>
                            <option># of Members</option>
                            <option>Advisor</option>
                        </select>
                        </span>
                        <span className="icon is-small is-left">
                        <i className="fas fa-sort"></i>
                        </span>
                    </p>
                    </div>
                </div>
                {/*This is the list of the clubs.*/}
                <ListOfClubs/>
            </div>
        </div>
     
    );
}