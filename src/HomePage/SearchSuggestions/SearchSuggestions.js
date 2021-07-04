import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions(){
    return(
        <div className = {styles.suggestions}>
            <div className = {styles.group}>
                <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-paint-brush"></i></span>
                <strong className = "has-text-light">Arts</strong>
            </div>
            <div className = {styles.group}>
                <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-volleyball-ball"></i></span>
                <strong className = "has-text-light">Sports</strong>
            </div>
            <div className = {styles.group}>
                <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-flask"></i></span>
                <strong className = "has-text-light">Science</strong>
            </div>
            <div className = {styles.group}>
                <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-hands-helping"></i></span>
                <strong className = "has-text-light">Volunteering</strong>
            </div>
        </div>
    );
}