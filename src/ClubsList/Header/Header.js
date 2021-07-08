import React from 'react';
import styles from './Header.module.css';
import {ListOfClubs} from '../ListOfClubs'

export function Header(){
    return(
        <div class="columns is-mobile">
            <div class="column">
                <div class= {styles['header']}>
                    <h1 class="subtitle is-4"><strong>List of All Clubs</strong></h1>

                    <div class="field">
                    <p class="control has-icons-left">
                        <span class="select">
                        <select className= "button is-ghost">
                            <option selected>Sort By: Alphabetical</option>
                            <option># of Members</option>
                            <option>Advisor</option>
                        </select>
                        </span>
                        <span class="icon is-small is-left">
                        <i class="fas fa-sort"></i>
                        </span>
                    </p>
                    </div>
                </div>
                <ListOfClubs/>
            </div>
        </div>
     
    );
}