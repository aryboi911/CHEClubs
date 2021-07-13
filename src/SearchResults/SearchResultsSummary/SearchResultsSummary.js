// Renders filters and adds club results to correct portion of the page

import React from 'react';
import styles from './SearchResultsSummary.module.css';
import {ClubResults} from '../ClubResults'

export function SearchResultsSummary(){
    return(
        <div className="columns is-mobile">
            <div className="column is-one-quarter">
                <div className= {styles['filter']}>
                    {/*Renders filters subsection */}
                    <h1 className="subtitle is-4"><strong>Filters</strong></h1>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor : '#000000',
                    }}/>
                    {/*Renders category selection menu */}
                    <label className="label">Category</label>
                    <button className={`button is-rounded ${styles['category']}`}
                        id = "catVolunteering" >Volunteering</button>
                    <button className={`button is-rounded ${styles['category']}`}
                        id = "catScience" >Science</button>
                    <button className={`button is-rounded ${styles['category']}`}
                        id = "catSports" >Sports</button>
                    <button className={`button is-rounded ${styles['category']}`}
                        id = "catArts" >Arts</button>
                    <hr  className = {styles['line']}style={{
                        color: '#dcdcdc',
                        backgroundColor: '#dcdcdc',
                        height: .1,
                        borderColor : '#dcdcdc',
                    }}/>
                    {/*Renders filter for number of members */}
                    <label className="label">Number of Members</label>
                    <div className = {styles['students']}>
                        <div className={`control ${styles['min']}`}>
                            <input className="input" type="text" placeholder="Min."/>
                        </div>
                        <p>—</p>
                        <div className={`control ${styles['max']}`}>
                            <input className="input" type="text" placeholder="Max."/>
                        </div>
                    </div>
                    <hr  className = {styles['line']}style={{
                        color: '#dcdcdc',
                        backgroundColor: '#dcdcdc',
                        height: .1,
                        borderColor : '#dcdcdc',
                    }}/>
                    {/*Renders filters based on time active */}
                    <div className="field">
                        <label className="label">Activity</label>
                        <div className="control">
                            <input type="checkbox"/>
                            <label className={`checkbox ${styles['check-box']}`}>
                            Active Now
                            </label>
                        </div>
                        <div className="control">
                            <input type="checkbox"/>
                            <label className={`checkbox ${styles['check-box']}`}>
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
                    {/*Filter button for submitting filters once selected */}
                    <button className="button is-black is-outlined">
                        <span>Filter</span>
                    </button>
                </div>
            </div>
            <div className="column">
                {/*Header for the results section of the page, including title and "Sort By" dropdown */}
                <div className= {styles['header']}>
                    <h1 className="subtitle is-4">Best Results for <strong>Science Olympiad</strong></h1>
                    {/*Renders the "Sort By" dropdown */}
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
                {/*Imports results and displays them */}
                <ClubResults/>
            </div>
        </div>
     
    );
}