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
                    <a href = {"https://sites.google.com/chclc.org/cheactivities/home#h.hk4pldn8i75t"}>
                    <button class="button is-ghost has-text-light"><strong>Make a Club</strong></button>
                    </a>
                </motion.div>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <button class="button is-ghost has-text-light">
                        <a href={"https://forms.gle/bJUaSDvAyXwtheD1A"}>
                        <strong className = "has-text-light">Advertise Your Club</strong>
                        </a>
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