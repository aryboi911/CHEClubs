import React from 'react';
import glass from '../assets/glass.png';
import styles from './Search.module.css';

export function Search(){
    return(
        <div>
            <div className = {styles.search}>   
                <form class= "box">
                    <div class="field has-addons">
                    <p class="control">
                        <span class="select">
                        <select>
                            <option>Type of Club (Optional)</option>
                            <option>Engineering</option>
                            <option>Science</option>
                            <option>Sports</option>
                        </select>
                        </span>
                    </p>
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Club Name..."/>
                    </p>
                    <p class="control">
                        <a className="button">
                        <img src = {glass} className = {styles.logo} alt = 'logo'/>
                        </a>
                    </p>
                    </div>
                </form>
            </div>
                <div>
                    <div class="notification is-info"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    <button class="delete"></button>
                     Some of the information on this website may be outdated.
                </div>
            </div>
        </div>
    );
}