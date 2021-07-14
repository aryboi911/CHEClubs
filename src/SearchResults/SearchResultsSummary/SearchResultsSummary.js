// Renders filters and adds club results to correct portion of the page

import React, {useState} from 'react';
import styles from './SearchResultsSummary.module.css';
import {ClubResults} from '../ClubResults'

export function SearchResultsSummary(props){
    let minMembers = "Min."
    let maxMembers = "Max."
    if (props.minMembers){minMembers = props.minMembers}
    if (props.maxMembers){maxMembers = props.maxMembers}

    let volunteering = "";
    let science = "";
    let arts = "";
    let sports = "";

    if(props.category === "volunteering"){volunteering = 'is-info';}
    if(props.category === "science"){science = 'is-info';}
    if(props.category === "arts"){arts = 'is-info';}
    if(props.category === "sports"){sports = 'is-info';}

    let category = "";
    let [minimumMembers, setMinimumMembers] = useState(props.minimumMembers || '');
    let [maximumMembers, setMaximumMembers] = useState(props.maximumMembers || '');

    let activeNow = 0;
    let activeSummer = 0;

    function activeNowCheck(){activeNow++}
    function activeSummerCheck(){activeSummer++}

    let searchTerm = "All Clubs"
    if(props.searchTerm){
        searchTerm = props.searchTerm;
    }

    function submit(e){
        const catVolunteering = document.querySelector("#catVolunteering");
        const catScience = document.querySelector("#catScience");
        const catSports = document.querySelector("#catSports");
        const catArts = document.querySelector("#catArts");

        if(catVolunteering.classList.contains('is-info')){
            category = "volunteering"
        }
        else if(catScience.classList.contains('is-info')){
            category = "science"
        }
        else if(catArts.classList.contains('is-info')){
            category = "arts"
        }
        else if(catSports.classList.contains('is-info')){
            category = "sports"
        }

        if(activeNow%2 === 1){
            activeNow = "checked"
        }
        else(activeNow = "")

        if(activeSummer%2 === 1){
            activeSummer = "checked"
        }
        else(activeSummer = "")

        if(minimumMembers !== ""){
            minimumMembers = parseInt(minimumMembers, 10);
            if(minimumMembers){}else{minimumMembers = ""}
        }
        else{
            if(minMembers !== "Min."){
                minimumMembers = parseInt(minMembers, 10);
                if(minimumMembers){}else{minimumMembers = ""}
            }
            else{
                minimumMembers = ""
            }
        }

        if(maximumMembers !== ""){
            maximumMembers = parseInt(maximumMembers, 10);
            if(maximumMembers){}else{maximumMembers = ""}
        }
        else{
            if(maxMembers !== "Max."){
                maximumMembers = parseInt(maxMembers, 10);
                if(maximumMembers){}else{maximumMembers = ""}
            }
            else{
                maximumMembers = ""
            }
        }

        let term = props.searchTerm

        if(typeof props.filter === 'function') {
            props.filter(term, category, minimumMembers, maximumMembers, activeNow, activeSummer);
        }

        e.preventDefault();
    }

    function clearFilters(){
        props.clearFilters();
    }

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
                    <button className={`button is-rounded ${volunteering} ${styles['category']}`}
                        id = "catVolunteering" >Volunteering</button>
                    <button className={`button is-rounded ${science} ${styles['category']}`}
                        id = "catScience" >Science</button>
                    <button className={`button is-rounded ${sports} ${styles['category']}`}
                        id = "catSports" >Sports</button>
                    <button className={`button is-rounded ${arts} ${styles['category']}`}
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
                            <input className="input" type="text" placeholder= {minMembers}
                            onChange = {(e) => setMinimumMembers(e.target.value)}/>
                        </div>
                        <p>—</p>
                        <div className={`control ${styles['max']}`}>
                            <input className="input" type="text" placeholder= {maxMembers}
                            onChange = {(e) => setMaximumMembers(e.target.value)}/>
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
                            <input type="checkbox" onClick = {activeNowCheck}/>
                            <label className={`checkbox ${styles['check-box']}`}>
                            Active Now
                            </label>
                        </div>
                        <div className="control">
                            <input type="checkbox" onClick = {activeSummerCheck}/>
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
                    <button className={`button is-black  ${styles['filter-button']}`}
                        onClick = {submit}>
                        <span>Filter</span>
                    </button>
                    <button className= "button is-black is-outlined" onClick = {clearFilters}>
                        <span>Clear Filters</span>
                    </button>
                </div>
            </div>
            <div className="column">
                {/*Header for the results section of the page, including title and "Sort By" dropdown */}
                <div className= {styles['header']}>
                    <h1 className="subtitle is-4">Best Results for <strong>{searchTerm}</strong></h1>
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
                <ClubResults searchTerm = {props.searchTerm} category = {props.category} 
                minMembers = {props.minMembers} maxMembers = {props.maxMembers} 
                activeNow = {props.activeNow} activeSummer = {props.activeSummer}/>
            </div>
        </div>
     
    );
}