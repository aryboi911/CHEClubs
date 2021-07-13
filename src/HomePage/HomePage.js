// This is the combined page for the "Home" page. It includes directions on what to do 
// when components are clicked and the combination of different components

import React from 'react';
import {NavBar} from'./NavBar/NavBar';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';
import styles from './HomePage.module.css';
import {Search} from '../Search/Search'
import './HomePage.css';
import {SearchSuggestions} from './SearchSuggestions/SearchSuggestions';
import {motion} from 'framer-motion';
import { Recommended } from './Recommended';
import useReactRouter from 'use-react-router';

export function HomePage() {

    const {history} =  useReactRouter();

    // Adds the searched term to the URL and redirects to search page when search button is hit
    function search(term){
        const urlEncodedTerm = encodeURI(term);
        history.push(`/search?find_club=${urlEncodedTerm}`);
        history.go(0);
    }

    // Navigates to Clubs List page when the "Clubs List" button is pressed
    function clubsList(){
        history.push(`/clubslist`);
        history.go(0);
    }

    // Navigates to the home page when the logo is pressed
    function home(){
        history.push('/');
        history.go(0);
    }

    return(
        <div className="landing-background">
            {/* This displayes the top navigation bar*/}
            <NavBar clubsList = {clubsList} home = {home}/>
            {/* This displayes the logo*/}
            <motion.img 
                initial ={{opacity: 0, scale:0}}
                animate = {{opacity: 1, scale:1}}
                src = {CHEScienceOlympiadLOGOALLTRANSPARENT} className = {styles.logo} alt = 'logo'
                onClick = {home}/>
            {/* This displayes the search bar, the shortcut filters, and the recommended sections*/}
            <Search search={search}/>
            <SearchSuggestions/>
            <Recommended />
        </div>
    );
}