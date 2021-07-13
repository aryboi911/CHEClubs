// This displays all of the clubs on the Recommended section of the home page and renders the modals that show  
// information about the clubs when pressed

import React from 'react';
import styles from './Recommended.module.css'
import { arrayClubs } from '../Data';
import {motion} from 'framer-motion';

export function Recommended(){


    const recommended = [arrayClubs[0],arrayClubs[3],arrayClubs[1]];

    const items = [];
    const modals = [];

    // Rendering all of the clubs previews
    for (let i = 0; i < recommended.length; i++) {
        items.push(
                <motion.div className="column"
                    initial ={{opacity: 0, scale:0}}
                    animate = {{opacity: 1, scale:1}}>
                    <div className = {`box ${styles['inner-box']}`}>
                    <div className = {styles['actual-content']}>
                        <div>
                            <tr>
                            <p className="title">{recommended[i][0]}</p>
                            </tr>
                            {/*Renders tags if present */}
                            <div>
                                <span className={`tag is-info is-light ${styles['tag-f']}`}>{recommended[i][11]}</span>
                                {recommended[i][12] &&
                                    <span className={`tag is-info is-light ${styles['tag-f']}`}>{recommended[i][12]}</span>
                                }
                                {recommended[i][13] &&
                                    <span className={`tag is-info is-light ${styles['tag-f']}`}>{recommended[i][13]}</span>
                                }
                            </div>
                        </div>
                        <div className= {styles['words']}>
                            <tr>
                            <hr  className = {styles['line']}style={{
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .1,
                                borderColor : '#000000',
                            }}/>
                            </tr>
                            {/*Renders logo of club */}
                            <tr>
                            <img src={recommended[i][18]} alt = "logo"/>
                            </tr>
                            <tr>
                            <hr  className = {styles['line1']}style={{
                                color: '#000000',
                                height: .1
                            }}/>
                            </tr>
                            {/*Basic preview information about the club */}
                            <tr>
                            <h3><strong>Members</strong>: {recommended[i][2]}</h3>
                            <h3><strong>Meeting Room: </strong> 
                                    {recommended[i][9]}</h3>
                            <h3><strong>Advisor Email</strong>: {recommended[i][6]}</h3>
                            </tr>
                            <tr>
                            <hr  className = {styles['line1']}style={{
                                color: '#000000',
                                height: .1
                            }}/>
                            </tr>
                            {/*Button to display modal when pressed */}
                            <div className = {styles['show-more']}>
                                <button className="button is-info" id = {recommended[i][17]}>Show More</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </motion.div>
        )
    }

    // Renders modals for all of the club previews, presented when the "Show More" button is pressed
    for(let i = 0; i < recommended.length; i++){
        modals.push(
            <div className="modal" id = {`modal${recommended[i][17]}`}>
            <div className="modal-background" id = {`modalbg${recommended[i][17]}`}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <div className={`modal-card-title ${styles['header']}`}>{recommended[i][0]}
                    {/*Renders tags if present */}
                    <div>
                    <span className={"tag is-info is-light"}>{recommended[i][11]}</span>
                    {recommended[i][12] &&
                        <span className={`tag is-info is-light ${styles['tag-f']}`}>{recommended[i][12]}</span>
                    }
                    {recommended[i][13] &&
                        <span className={`tag is-info is-light ${styles['tag-f']}`}>{recommended[i][13]}</span>
                    }
                    </div>
                </div>
                <button className="delete" aria-label="close" id = {`delete${recommended[i][17]}`}></button>
                </header>
                {/*Renders more extensive information about club not shown in preview */}
                <section className="modal-card-body">
                    <section className="section">
                        <h1 className="title">Description</h1>
                        <h2 className="subtitle">
                            {recommended[i][8]}
                        </h2>
                    </section>  
                    <section className="section">
                        <h1 className="title">What Do You Do?</h1>
                        <h2 className="subtitle">
                            {recommended[i][7]}
                        </h2>
                    </section>  
                    {/*Renders information about how to get into contact */}
                    <section className="section">
                        <h1 className="title">Contact Information</h1>
                        <h2 className="subtitle">
                            <div className = "columns is-mobile">
                                <div className = "column">
                                    <h3><strong>Number of Members:</strong> {recommended[i][2]}</h3>
                                    <h3><strong>Number of Officers:</strong> {recommended[i][2]}</h3>
                                    <h3><strong>Months Active: </strong>{recommended[i][10]}</h3>
                                    <h3><strong>President: </strong>{recommended[i][3]}</h3>
                                </div>
                                <div className = "column">
                                <h3><strong>Meeting Room: </strong> {recommended[i][2]}</h3>
                                <h3><strong>Advisor:</strong> {recommended[i][5]}</h3>
                                <h3><strong>Advisor Email</strong>: {recommended[i][6]}</h3>
                                
                                </div>
                            </div>
                        </h2>
                    </section>  
                </section>
                {/*Renders Social Media / Google Classroom at bottom if present */}
                <footer class="modal-card-foot">
                {recommended[i][14] &&
                    <a href = {recommended[i][14]}>
                    <button className={`button is-danger ${styles['link-button']}`}>
                        <span className="icon is-medium">
                        <i className="fab fa-instagram"></i>
                        </span>
                        <span>Instagram</span>
                    </button>
                    </a>
                    }
                    {recommended[i][15] &&
                    <a href = {recommended[i][15]}>
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
        );
    }


    return(
        <div>
            {/*Renders information about screen not being wide enough(may cause errors) when
               viewed on a screen smaller than a laptop */}
            <div className = {styles['mobile-noti']}>
                <span class="tag is-info is-medium is-hidden-widescreen">
                    This website is not supported in this width.</span>
            </div>
            <div className = {styles['mobile-noti1']}>
                <span class="tag is-info is-medium is-hidden-widescreen">
                    Some options may not be displayed correctly.</span>
            </div>
            {/*Renders section header and line */}
            <div className = {styles['recommend-box']}>
                <div className = "box">
                    <h1 className = {`title is-3 ${styles['section-title']}`}>Recommended</h1>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor : '#000000',
                        marginBottom: "25px"
                    }}/>
                    {/*Renders the recommended club previews */}
                    <div className = {styles['recommended']}>
                        <div className = "columns">{items}</div>
                    </div>
                    {/*Renders modals*/}
                    {modals}
                </div>
            </div>
        </div>        
    )
}