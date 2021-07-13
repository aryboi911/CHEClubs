// Shows the shortcut filters displayed below the search bar for easy navigation to a certain category of clubs

import React from 'react';
import styles from './SearchSuggestions.module.css';
import {motion} from 'framer-motion';

export function SearchSuggestions(){
    return(
        // Renders the various options as ghost buttons with icons
        <div className = {styles.suggestions}>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button className="button is-ghost has-text-light">
                    <span className={`icon is-small ${styles['suggestion']}`}><i className="fas fa-paint-brush"></i></span>
                    <strong className = "has-text-light">Arts</strong>
                </button>
            </motion.div>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button className="button is-ghost has-text-light">
                    <span className={`icon is-small ${styles['suggestion']}`}><i className="fas fa-volleyball-ball"></i></span>
                    <strong className = "has-text-light">Sports</strong>
                </button>
            </motion.div>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button className="button is-ghost has-text-light">
                    <span className={`icon is-small ${styles['suggestion']}`}><i className="fas fa-flask"></i></span>
                    <strong className = "has-text-light">Science</strong>
                </button>
            </motion.div>
            <motion.div className = {styles.group}
                whileHover = {{scale: 1.15}}
                >
                <button className="button is-ghost has-text-light">
                    <span className={`icon is-small ${styles['suggestion']}`}><i className="fas fa-hands-helping"></i></span>
                    <strong className = "has-text-light">Volunteering</strong>
                </button>
            </motion.div>
        </div>
    );
}