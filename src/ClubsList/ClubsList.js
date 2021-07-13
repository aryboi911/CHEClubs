// This is the combined page for the "Clubs List" page. It includes directions on what to do 
// when components are clicked and the combination of different parts

import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {Header} from './Header/Header';
import useReactRouter from 'use-react-router';

export function ClubsList(){

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
        <div>
            {/* This displayes the top bar, including the search bar and buttons*/}
            <SearchBar search={search} clubsList = {clubsList} home = {home}/>
            {/* This displays the header and all of the clubs*/}
            <Header/>
        </div>
    );
}