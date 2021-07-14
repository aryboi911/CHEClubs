// Renders the header for use on pages other than the home page

import React, {useState} from 'react';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import styles from './SearchBar.module.css'
import {motion} from 'framer-motion';

export function SearchBar(props){

    // Logs value in the search bar and exports to respective overall file for use and addition to URL
    const [term, setTerm] = useState(props.term || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term);
        }
        console.log(term);
        e.preventDefault();
    }

    //Navigate to respective pages on button press(references functions in the respective overall file)
    function clubsList(){
        props.clubsList();
    }

    function home(){
        props.home();
    }

    let searchTerm = "Club Name..."
    if(props.searchTerm){
        searchTerm = props.searchTerm;
    }


    return(
        <div>
        <div className = {styles['nav-bar']}>
            {/*Navigate to home page when the logo on the header is clicked */}
            <button className="button is-ghost" onClick = {home}>
            <motion.img 
            initial ={{opacity: 0, scale:0}}
            animate = {{opacity: 1, scale:1}}
            className = {styles['logo']} src = {CHEScienceOlympiadLOGOALLTRANSPARENT} alt = 'logo'/>
            </button>
            {/*Renders the search bar on pages other than the home page, logs value exported to above function */}
            <div className = {styles.search}>   
                <form onSubmit={submit}>
                <div className="field has-addons">
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder={searchTerm}
                            onChange = {(e) => setTerm(e.target.value)}
                            />
                    </p>
                    <p className="control">
                    <button className={"button"} onClick = {submit}>
                        <div className="icon">
                            <i className="fas fa-search"></i>
                        </div>
                    </button>
                    </p>
                </div>
                </form>
            </div>
            {/*Buttons on header for redirection to pages */}
            <div class>
                <motion.button className={`button is-link is-light ${styles['club-list-button']}`}
                    whileHover = {{scale: 1.15}} onClick = {clubsList}
                    >Club List
                </motion.button>
                <a href={"https://forms.gle/bJUaSDvAyXwtheD1A"}>
                <motion.button className="button is-danger is-light"
                    whileHover = {{scale: 1.15}}
                    >Advertise a Club
                </motion.button>
                </a>
            </div> 
        </div>
        </div>
    );
}