// This displays all of the results on the "Search" page and renders the modals that show information about the 
// the clubs when pressed

import React from 'react';
import styles from './ClubResults.module.css';
import { arrayClubs } from '../Data';
import {motion} from 'framer-motion';

export function ClubResults(){

    const items = [];

    // Rendering all of the clubs previews
    for (let i = 0; i < arrayClubs.length; i++) {
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
                    <img src = {arrayClubs[i][18]} alt = "logo"/>
                    </div>
                    <div className="column is-one-third">
                        <h1 className="title is-4">{arrayClubs[i][0]}</h1>
                        {/*Basic preview information about the club */}
                        <div>
                            <h3><strong>Number of Members:</strong> {arrayClubs[i][2]}</h3>
                            <h3><strong>Number of Officers:</strong> {arrayClubs[i][2]}</h3>
                            <h3><strong>Months Active: </strong>{arrayClubs[i][10]}</h3>
                            <h3><strong>President: </strong>{arrayClubs[i][3]}</h3>
                        </div>
                    </div>
                    <div className="column is-two-fifths">  
                        {/*Renders tags if present */}
                        <div>
                            <span className={"tag is-info is-light"}>{arrayClubs[i][11]}</span>
                            {arrayClubs[i][12] &&
                                <span className={`tag is-info is-light ${styles['tag-f']}`}>{arrayClubs[i][12]}</span>
                            }
                            {arrayClubs[i][13] &&
                                <span className={`tag is-info is-light ${styles['tag-f']}`}>{arrayClubs[i][13]}</span>
                            }
                        </div>
                        {/*Basic preview information about the club */}
                        <div >
                            <h3 className = {styles['contact']}><strong>Meeting Room: </strong> 
                                {arrayClubs[i][2]}</h3>
                            <h3><strong>Advisor:</strong> {arrayClubs[i][5]}</h3>
                            <h3><strong>Advisor Email</strong>: {arrayClubs[i][6]}</h3>
                            {/*Button to display modal when pressed */}
                            <div className = {styles['show-more']}>
                                <button className="button is-info" id = {arrayClubs[i][17]}>Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className="column">  
                    </div>
                </div>
            </motion.div>
            {/*Renders modals for all of the club previews, presented when the "Show More" button is pressed */}
            <div className="modal" id = {`modal${arrayClubs[i][17]}`}>
            <div className="modal-background" id = {`modalbg${arrayClubs[i][17]}`}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <div className={`modal-card-title ${styles['header']}`}>{arrayClubs[i][0]}
                    {/*Renders tags if present */}
                    <div>
                    <span className={"tag is-info is-light"}>{arrayClubs[i][11]}</span>
                    {arrayClubs[i][12] &&
                        <span className={`tag is-info is-light ${styles['tag-f']}`}>{arrayClubs[i][12]}</span>
                    }
                    {arrayClubs[i][13] &&
                        <span className={`tag is-info is-light ${styles['tag-f']}`}>{arrayClubs[i][13]}</span>
                    }
                    </div>
                </div>
                <button className="delete" aria-label="close" id = {`delete${arrayClubs[i][17]}`}></button>
                </header>
                {/*Renders more extensive information about club not shown in preview */}
                <section className="modal-card-body">
                    <section className="section">
                        <h1 className="title">Description</h1>
                        <h2 className="subtitle">
                            {arrayClubs[i][8]}
                        </h2>
                    </section>  
                    <section className="section">
                        <h1 className="title">What Do You Do?</h1>
                        <h2 className="subtitle">
                            {arrayClubs[i][7]}
                        </h2>
                    </section>  
                    {/*Renders information about how to get into contact */}
                    <section className="section">
                        <h1 className="title">Contact Information</h1>
                        <h2 className="subtitle">
                            <div className = "columns is-mobile">
                                <div className = "column">
                                    <h3><strong>Number of Members:</strong> {arrayClubs[i][2]}</h3>
                                    <h3><strong>Number of Officers:</strong> {arrayClubs[i][2]}</h3>
                                    <h3><strong>Months Active: </strong>{arrayClubs[i][10]}</h3>
                                    <h3><strong>President: </strong>{arrayClubs[i][3]}</h3>
                                </div>
                                <div className = "column">
                                <h3><strong>Meeting Room: </strong> {arrayClubs[i][2]}</h3>
                                <h3><strong>Advisor:</strong> {arrayClubs[i][5]}</h3>
                                <h3><strong>Advisor Email</strong>: {arrayClubs[i][6]}</h3>
                                
                                </div>
                            </div>
                        </h2>
                    </section>  
                </section>
                {/*Renders Social Media / Google Classroom at bottom if present */}
                <footer class="modal-card-foot">
                {arrayClubs[i][14] &&
                    <a href = {arrayClubs[i][14]}>
                    <button className={`button is-danger ${styles['link-button']}`}>
                        <span className="icon is-medium">
                        <i className="fab fa-instagram"></i>
                        </span>
                        <span>Instagram</span>
                    </button>
                    </a>
                    }
                    {arrayClubs[i][15] &&
                    <a href = {arrayClubs[i][15]}>
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

    // Renders components made above 
    return(
        <div>
            {items}
        </div>
    );

}