// This displays all of the results on the "Search" page and renders the modals that show information about the 
// the clubs when pressed

import React from 'react';
import styles from './ClubResults.module.css';
import { arrayClubs } from '../Data';
import {motion} from 'framer-motion';

export function ClubResults(props){

    let clubsArray = arrayClubs

    if(props.searchTerm){
        clubsArray = clubsArray.filter(club => {
            if(typeof club[0] === 'string'){
                    if(club[0].toLowerCase().trim().includes(props.searchTerm.toLowerCase().trim())){
                    return true;
                }
            }
        })
    }

    if(props.category){
        clubsArray = clubsArray.filter(club => {
            for(let i = 11; i < 14; i++){
                if(typeof club[i] === 'string'){
                    if(club[i].toLowerCase().trim().includes(props.category.toLowerCase().trim())){
                        return true;
                    }
                }
            }
        })
    }

    if(props.minMembers){
        clubsArray = clubsArray.filter(club => {
            if(club[1] >= props.minMembers){
                return true;
            }
        })
    }

    if(props.maxMembers){
        clubsArray = clubsArray.filter(club => {
            if(club[1] <= props.maxMembers){
                return true;
            }
        })
    }

    if(props.activeNow){
        clubsArray = clubsArray.filter(club => {
            if(club[19] === "yes"){
                return true;
            }
        })
    }

    if(props.activeSummer){
        clubsArray = clubsArray.filter(club => {
            if(club[20] === "yes"){
                return true;
            }
        })
    }

    if(props.sortBy === "alphabetical"){
        clubsArray.sort();
    }

    const items = [];

    // Rendering all of the clubs previews
    if(clubsArray.length > 0){
    for (let i = 0; i < clubsArray.length; i++) {
        items.push(
            <div className = {styles['results']}>
            <div>
                {/*Animation*/}
                <motion.div className="box"
                    initial ={{opacity: 0, scale:0}}
                    animate = {{opacity: 1, scale:1}}
                    >
                <div className="columns is-mobile">
                    <div className="column is-one-fifth">
                    {/*Renders logo of club */}
                    <img src = {clubsArray[i][18]} alt = "logo"/>
                    </div>
                    <div className="column is-one-third">
                        <h1 className="title is-4">{clubsArray[i][0]}</h1>
                        {/*Basic preview information about the club */}
                        <div>
                            <h3><strong>Number of Members:</strong> {clubsArray[i][2]}</h3>
                            <h3><strong>Number of Officers:</strong> {clubsArray[i][2]}</h3>
                            <h3><strong>Months Active: </strong>{clubsArray[i][10]}</h3>
                            <h3><strong>President: </strong>{clubsArray[i][3]}</h3>
                        </div>
                    </div>
                    <div className="column is-two-fifths">  
                        {/*Renders tags if present */}
                        <div>
                            <span className={"tag is-info is-light"}>{clubsArray[i][11]}</span>
                            {clubsArray[i][12] &&
                                <span className={`tag is-info is-light ${styles['tag-f']}`}>{clubsArray[i][12]}</span>
                            }
                            {clubsArray[i][13] &&
                                <span className={`tag is-info is-light ${styles['tag-f']}`}>{clubsArray[i][13]}</span>
                            }
                        </div>
                        {/*Basic preview information about the club */}
                        <div >
                            <h3 className = {styles['contact']}><strong>Meeting Room: </strong> 
                                {clubsArray[i][2]}</h3>
                            <h3><strong>Advisor:</strong> {clubsArray[i][5]}</h3>
                            <h3><strong>Advisor Email</strong>: {clubsArray[i][6]}</h3>
                            {/*Button to display modal when pressed */}
                            <div className = {styles['show-more']}>
                                <button className="button is-info" id = {clubsArray[i][17]}>Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className="column">  
                    </div>
                </div>
            </motion.div>
            {/*Renders modals for all of the club previews, presented when the "Show More" button is pressed */}
            <div className="modal" id = {`modal${clubsArray[i][17]}`}>
            <div className="modal-background" id = {`modalbg${clubsArray[i][17]}`}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <div className={`modal-card-title ${styles['header']}`}>{clubsArray[i][0]}
                    {/*Renders tags if present */}
                    <div>
                    <span className={"tag is-info is-light"}>{clubsArray[i][11]}</span>
                    {clubsArray[i][12] &&
                        <span className={`tag is-info is-light ${styles['tag-f']}`}>{clubsArray[i][12]}</span>
                    }
                    {clubsArray[i][13] &&
                        <span className={`tag is-info is-light ${styles['tag-f']}`}>{clubsArray[i][13]}</span>
                    }
                    </div>
                </div>
                <button className="delete" aria-label="close" id = {`delete${clubsArray[i][17]}`}></button>
                </header>
                {/*Renders more extensive information about club not shown in preview */}
                <section className="modal-card-body">
                    <section className="section">
                        <h1 className="title">Description</h1>
                        <h2 className="subtitle">
                            {clubsArray[i][8]}
                        </h2>
                    </section>  
                    <section className="section">
                        <h1 className="title">What Do You Do?</h1>
                        <h2 className="subtitle">
                            {clubsArray[i][7]}
                        </h2>
                    </section>  
                    {/*Renders information about how to get into contact */}
                    <section className="section">
                        <h1 className="title">Contact Information</h1>
                        <h2 className="subtitle">
                            <div className = "columns is-mobile">
                                <div className = "column">
                                    <h3><strong>Number of Members:</strong> {clubsArray[i][2]}</h3>
                                    <h3><strong>Number of Officers:</strong> {clubsArray[i][2]}</h3>
                                    <h3><strong>Months Active: </strong>{clubsArray[i][10]}</h3>
                                    <h3><strong>President: </strong>{clubsArray[i][3]}</h3>
                                </div>
                                <div className = "column">
                                <h3><strong>Meeting Room: </strong> {clubsArray[i][2]}</h3>
                                <h3><strong>Advisor:</strong> {clubsArray[i][5]}</h3>
                                <h3><strong>Advisor Email</strong>: {clubsArray[i][6]}</h3>
                                
                                </div>
                            </div>
                        </h2>
                    </section>  
                </section>
                {/*Renders Social Media / Google Classroom at bottom if present */}
                <footer class="modal-card-foot">
                {clubsArray[i][14] &&
                    <a href = {clubsArray[i][14]}>
                    <button className={`button is-danger ${styles['link-button']}`}>
                        <span className="icon is-medium">
                        <i className="fab fa-instagram"></i>
                        </span>
                        <span>Instagram</span>
                    </button>
                    </a>
                    }
                    {clubsArray[i][15] &&
                    <a href = {clubsArray[i][15]}>
                    <button className={`button is-success ${styles['link-button']}`}>
                        <span className="icon is-medium">
                        <i className="fab fa-google"></i>
                        </span>
                        <span>Google Classroom</span>
                    </button>
                    </a>
                }
                </footer>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

    else{
        items.push(
            <div>
                <div className = {styles['no-results-found']}>
                    <img src = "https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1"
                    className = {styles['no-results']}/>
                </div>
                <div className = {styles['no-results-found']}>
                    <h1 className="subtitle is-3"><strong>No Results Found!</strong></h1>
                </div>
            </div>
        )
    }

    // Renders components made above 
    return(
        <div>
            {items}
        </div>
    );

}