import React from 'react';
import CHEScienceOlympiadLOGOALLTRANSPARENT from './CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import styles from './SearchBar.module.css'
import {motion} from 'framer-motion';

export function SearchBar(){
    return(
        <div>
        <div className = {styles['nav-bar']}>
            <motion.img 
            initial ={{opacity: 0, scale:0}}
            animate = {{opacity: 1, scale:1}}
            className = {styles['logo']} src = {CHEScienceOlympiadLOGOALLTRANSPARENT} alt = 'logo'/>
            <div className = {styles.search}>   
                <div className="field has-addons">
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Club Name..."/>
                    </p>
                    <p className="control">
                    <button className={"button"}>
                        <div className="icon">
                            <i className="fas fa-search"></i>
                        </div>
                    </button>
                    </p>
                </div>
            </div>
            <div class>
                <motion.button class={`button is-link is-light ${styles['club-list-button']}`}
                    whileHover = {{scale: 1.15}}
                    >Club List
                </motion.button>
                <a href={"https://forms.gle/bJUaSDvAyXwtheD1A"}>
                <motion.button class="button is-danger is-light"
                    whileHover = {{scale: 1.15}}
                    >Advertise a Club
                </motion.button>
                </a>
            </div> 
        </div>
        </div>
    );
}