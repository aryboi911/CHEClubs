// This is the combined page for the "Search" page. It includes directions on what to do 
// when components are clicked and the combination of different parts

import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';
import useReactRouter from 'use-react-router';

export function SearchResults(){

    const {history} =  useReactRouter();


    function filter(term, category, minimumMembers, maximumMembers, activeNow, activeSummer){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedCategory = encodeURI(category);
        const urlEncodedMinimumMembers = encodeURI(minimumMembers);
        const urlEncodedMaximumMembers = encodeURI(maximumMembers);
        const urlEncodedActiveNow = encodeURI(activeNow);
        const urlEncodedActiveSummer = encodeURI(activeSummer);

        history.push(`/search?find_club=${urlEncodedTerm}&category=${urlEncodedCategory}
&min_members=${urlEncodedMinimumMembers}&max_members=${urlEncodedMaximumMembers}
&active_now=${urlEncodedActiveNow}&active_summer=${urlEncodedActiveSummer}`);
        history.go(0);
    }

    function clearFilters(){
        history.push(`/search?find_club=&category=&min_members=&max_members=&active_now=&active_summer=`);
    }


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

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('find_club');
    const category = params.get('category');
    const minMembers = params.get('min_members')
    const maxMembers = params.get('max_members');
    const activeNow = params.get('active_now');
    const activeSummer = params.get('active_summer');

    return(
        <div>
            {/* This displayes the top bar, including the search bar and buttons*/}
            <SearchBar search={search} clubsList = {clubsList} home = {home} searchTerm = {searchTerm}/>
            {/* This displayes the content of the page, including the filters and the results*/}
            <SearchResultsSummary searchTerm = {searchTerm} category = {category} minMembers = {minMembers}
                maxMembers = {maxMembers} activeNow = {activeNow} activeSummer = {activeSummer} 
                filter = {filter} clearFilters = {clearFilters}/>
        </div>
    );
}