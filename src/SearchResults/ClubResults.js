import React from 'react';
import styles from './ClubResults.module.css';
import { clubName, members, officers, presName, advisorName, advisorEmail, whatToDo, description,
    meetRoom, activeMonths, tag1, tag2, tag3 } from '../Data';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import {motion} from 'framer-motion';

export function ClubResults(){

    const items = [];

    for (let i = 0; i < clubName.length; i++) {
        items.push(
            <div className = {styles['results']}>
            <div>
                <motion.div class="box"
                    initial ={{opacity: 0, scale:0}}
                    animate = {{opacity: 1, scale:1}}
                    >
                <div class="columns is-mobile">
                    <div class="column is-one-fifth">
                        <img src = {CHEScienceOlympiadLOGOALLTRANSPARENT} alt = "logo"/>
                    </div>
                    <div class="column is-one-third">
                        <h1 class="title is-4">{clubName[i]}</h1>
                        <div>
                            <h3><strong>Number of Members:</strong> {members[i]}</h3>
                            <h3><strong>Number of Officers:</strong> {officers[i]}</h3>
                            <h3><strong>Months Active: </strong>{activeMonths[i]}</h3>
                            <h3><strong>President: </strong>{presName[i]}</h3>
                        </div>
                    </div>
                    <div class="column is-two-fifths">  
                        <div>
                            <span class={"tag is-info is-light"}>{tag1[i]}</span>
                            {tag2[i] &&
                                <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i]}</span>
                            }
                            {tag3[i] &&
                                <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i]}</span>
                            }
                        </div>
                        <div >
                            <h3 className = {styles['contact']}><strong>Meeting Room: </strong> 
                                {meetRoom[i]}</h3>
                            <h3><strong>Advisor:</strong> {advisorName[i]}</h3>
                            <h3><strong>Advisor Email</strong>: {advisorEmail[i]}</h3>
                            <div className = {styles['show-more']}>
                                <button class="button is-info" id = " show-more-button" 
                                clubInfo = {clubName[i]} tagName = {clubName[i]}>
                                Show More</button>
                            </div>
                        </div>
                    </div>
                    <div class="column">  
                    </div>
                </div>
            </motion.div>
            <div class="modal" clubInfo = {clubName[i]} >
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <div class={`modal-card-title ${styles['header']}`}>{clubName[i]}
                    <div>
                    <span class={"tag is-info is-light"}>{tag1[i]}</span>
                    {tag2[i] &&
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i]}</span>
                    }
                    {tag3[i] &&
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i]}</span>
                    }
                    </div>
                </div>
                <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <section class="section">
                        <h1 class="title">Description</h1>
                        <h2 class="subtitle">
                            {description[i]}
                        </h2>
                    </section>  
                    <section class="section">
                        <h1 class="title">What Do You Do?</h1>
                        <h2 class="subtitle">
                            {whatToDo[i]}
                        </h2>
                    </section>  
                    <section class="section">
                        <h1 class="title">Contact Information</h1>
                        <h2 class="subtitle">
                            <div className = "columns is-mobile">
                                <div className = "column">
                                    <h3><strong>Number of Members:</strong> {members[i]}</h3>
                                    <h3><strong>Number of Officers:</strong> {officers[i]}</h3>
                                    <h3><strong>Months Active: </strong>{activeMonths[i]}</h3>
                                    <h3><strong>President: </strong>{presName[i]}</h3>
                                </div>
                                <div className = "column">
                                <h3><strong>Meeting Room: </strong> {meetRoom[i]}</h3>
                                <h3><strong>Advisor:</strong> {advisorName[i]}</h3>
                                <h3><strong>Advisor Email</strong>: {advisorEmail[i]}</h3>
                                
                                </div>
                            </div>
                        </h2>
                    </section>  
                </section>
            </div>
            </div>
            </div>
            </div>
        )
    }
    return(
        <div>
            {items}
        </div>
    );

}