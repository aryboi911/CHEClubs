import React from 'react';
import styles from './SearchResultsSummary.module.css';
import {ClubResults} from '../ClubResults'

export function SearchResultsSummary(){
    return(
        <div class="columns is-mobile">
            <div class="column is-one-fifth">
                <div class= {styles['filter']}>
                    <h1 class="subtitle is-5"><strong>Filters</strong></h1>
                </div>
            </div>
            <div class="column">
                <div class= {styles['header']}>
                    <h1 class="subtitle is-4">Best Results for <strong>Science Olympiad</strong></h1>

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
                <ClubResults/>
            </div>
        </div>
     
    );
}