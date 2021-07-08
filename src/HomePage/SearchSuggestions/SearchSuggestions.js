import React from 'react';
import styles from './SearchSuggestions.module.css';
import {motion} from 'framer-motion';

export function SearchSuggestions(){
    return(
        <div className = {styles.suggestions}>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button class="button is-ghost has-text-light">
                    <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-paint-brush"></i></span>
                    <strong className = "has-text-light">Arts</strong>
                </button>
            </motion.div>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button class="button is-ghost has-text-light">
                    <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-volleyball-ball"></i></span>
                    <strong className = "has-text-light">Sports</strong>
                </button>
            </motion.div>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button class="button is-ghost has-text-light">
                    <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-flask"></i></span>
                    <strong className = "has-text-light">Science</strong>
                </button>
            </motion.div>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button class="button is-ghost has-text-light">
                    <span class={`icon is-small ${styles['suggestion']}`}><i class="fas fa-hands-helping"></i></span>
                    <strong className = "has-text-light">Volunteering</strong>
                </button>
            </motion.div>
        </div>
    );
}