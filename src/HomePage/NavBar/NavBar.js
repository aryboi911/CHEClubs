import React from 'react';
import styles from './NavBar.module.css';

export function NavBar() {
    return(
        <div>
            <h1 className = "has-text-black">.</h1>
            <div className={styles['nav-bar']}>
                <span className="icon-text">
                    <span className="icon has-text-white">
                        <i className="fas fa-home"></i>
                    </span>
                    <strong className = "has-text-light">Home</strong>
                </span>
                <div>
                    <strong className = "has-text-light">Make a Club</strong>
                </div>
                <div>
                    <strong className = "has-text-light">Advertise your Club</strong>
                </div>
                <div>
                    <strong className = "has-text-light">Clubs List</strong>
                </div>
                <div>
                    <strong className = "has-text-light">Events</strong>
                </div>
            </div>
        </div>
    );
}