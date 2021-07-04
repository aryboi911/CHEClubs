import React from 'react';
import styles from './NavBar.module.css';

export function NavBar() {
    return(
        <div className={styles['nav-bar']}>
            <span class="icon-text">
                <span class="icon">
                    <i class="fas fa-home"></i>
                </span>
                <strong>Home</strong>
            </span>
            <div>
                <strong>Make a Club</strong>
            </div>
            <div>
                <strong>Advertise your Club</strong>
            </div>
            <div>
                <strong>Events</strong>
            </div>
        </div>
    );
}