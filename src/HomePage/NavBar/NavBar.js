import React from 'react';
import styles from './NavBar.module.css';
import {motion} from 'framer-motion';

export function NavBar() {
    return(
        <div>
            <div className={styles['nav-bar']}>
                <motion.span className="icon-text"
                    whileHover = {{scale: 1.15}}
                    >
                    <button class="button is-ghost has-text-light">
                        <span className="icon has-text-white">
                            <i className="fas fa-home"></i>
                        </span>
                        <strong className = "has-text-light">Home</strong>
                    </button>
                </motion.span>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <button class="button is-ghost has-text-light"><strong>Make a Club</strong></button>
                </motion.div>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <button class="button is-ghost has-text-light">
                        <strong className = "has-text-light">Advertise Your Club</strong>
                    </button>
                </motion.div>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <button class="button is-ghost has-text-light">
                        <strong className = "has-text-light">Clubs List</strong>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}