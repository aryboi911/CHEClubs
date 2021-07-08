import React from 'react';
import {NavBar} from'./NavBar/NavBar';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import styles from './HomePage.module.css';
import {Search} from '../Search/Search'
import './HomePage.css';
import {SearchSuggestions} from './SearchSuggestions/SearchSuggestions';
import {motion} from 'framer-motion';

export function HomePage() {
    return(
        <div className="landing-background">
            <NavBar/>
            <motion.img 
                initial ={{opacity: 0, scale:0}}
                animate = {{opacity: 1, scale:1}}
                src = {CHEScienceOlympiadLOGOALLTRANSPARENT} className = {styles.logo} alt = 'logo'/>
            <Search />
            <SearchSuggestions/>
        </div>
    );
}