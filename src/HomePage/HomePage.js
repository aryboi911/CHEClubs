import React from 'react';
import {NavBar} from'./NavBar/NavBar';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import styles from './HomePage.module.css';
import {Search} from '../Search/Search'

export function HomePage() {
    return(
        <div>
            <NavBar/>
            <img src = {CHEScienceOlympiadLOGOALLTRANSPARENT} className = {styles.logo} alt = 'logo'/>
            <Search />
        </div>
    );
}