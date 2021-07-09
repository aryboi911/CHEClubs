import React from 'react';
import styles from './SearchResultsSummary.module.css';
import {ClubResults} from '../ClubResults'

export function SearchResultsSummary(){
    return(
        <div class="columns is-mobile">
            <div class="column is-one-quarter">
                <div class= {styles['filter']}>
                    <h1 class="subtitle is-4"><strong>Filters</strong></h1>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor : '#000000',
                    }}/>
                    <label class="label">Category</label>
                    <button class={`button is-rounded ${styles['category']}`}>Volunteering</button>
                    <button class={`button is-rounded ${styles['category']}`}>Science</button>
                    <button class={`button is-rounded ${styles['category']}`}>Sports</button>
                    <button class={`button is-rounded ${styles['category']}`}>Arts</button>
                    <hr  className = {styles['line']}style={{
                        color: '#dcdcdc',
                        backgroundColor: '#dcdcdc',
                        height: .1,
                        borderColor : '#dcdcdc',
                    }}/>
                    <label class="label">Number of Members</label>
                    <div className = {styles['students']}>
                        <div class={`control ${styles['min']}`}>
                            <input class="input" type="text" placeholder="Min."/>
                        </div>
                        <p>—</p>
                        <div class={`control ${styles['max']}`}>
                            <input class="input" type="text" placeholder="Max."/>
                        </div>
                    </div>
                    <hr  className = {styles['line']}style={{
                        color: '#dcdcdc',
                        backgroundColor: '#dcdcdc',
                        height: .1,
                        borderColor : '#dcdcdc',
                    }}/>
                    <div class="field">
                        <label class="label">Activity</label>
                        <div class="control">
                            <input type="checkbox"/>
                            <label class={`checkbox ${styles['check-box']}`}>
                            Active Now
                            </label>
                        </div>
                        <div class="control">
                            <input type="checkbox"/>
                            <label class={`checkbox ${styles['check-box']}`}>
                            Active During the Summer
                            </label>
                        </div>
                    </div>
                    <hr style={{
                        color: '#dcdcdc',
                        backgroundColor: '#dcdcdc',
                        height: .1,
                        borderColor : '#dcdcdc',
                    }}/>
                    <button class="button is-black is-outlined">
                        <span>Filter</span>
                    </button>
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