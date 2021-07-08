import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';

export function SearchResults(){
    return(
        <div>
            <SearchBar/>
            <SearchResultsSummary/>
        </div>
    );
}