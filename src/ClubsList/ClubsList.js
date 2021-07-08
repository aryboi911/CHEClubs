import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {Header} from './Header/Header';

export function ClubsList(){
    return(
        <div>
            <SearchBar/>
            <Header/>
        </div>
    );
}