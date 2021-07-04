import React from 'react';
import {NavBar} from'./NavBar/NavBar';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import styles from './HomePage.module.css';
import {Search} from '../Search/Search'
import './HomePage.css';
import {SearchSuggestions} from './SearchSuggestions/SearchSuggestions';

export function HomePage() {
    return(
        <div className="landing-background">
            <NavBar/>
            <img src = {CHEScienceOlympiadLOGOALLTRANSPARENT} className = {styles.logo} alt = 'logo'/>
            <Search />
            <SearchSuggestions/>
        </div>
    );
}