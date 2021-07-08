import React from 'react';
import styles from './ListOfClubs.module.css';
import { gcLink, instaLink, clubArray, clubName, members, officers, presName, advisorName, advisorEmail, whatToDo, description,
    meetRoom, activeMonths, tag1, tag2, tag3 } from '../Data';
import CHEScienceOlympiadLOGOALLTRANSPARENT from '../assets/CHEScienceOlympiadLOGOALLTRANSPARENT.png';

export function ListOfClubs(){

    const items = [];
    const modals = [];

    for (let i = 0; i < clubName.length; i+=5) {
        items.push(
            <div className = {styles['results']}>
                <div className="columns">
                <div class="column">
                    <div className = "box">
                    <table class="table">
                        <tr>
                        <p class="title">{clubName[i]}</p>
                        </tr>
                        <div>
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag1[i]}</span>
                            {tag2[i] &&
                                <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i]}</span>
                            }
                            {tag3[i] &&
                                <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i]}</span>
                            }
                        </div>
                        <div className = {styles['actual-content']}>
                        <tr>
                        <hr  className = {styles['line']}style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .1,
                            borderColor : '#000000',
                        }}/>
                        </tr>
                        <tr>
                        <img src={CHEScienceOlympiadLOGOALLTRANSPARENT} alt = "logo"/>
                        </tr>
                        <tr>
                        <hr  className = {styles['line1']}style={{
                            color: '#000000',
                            height: .1
                        }}/>
                        </tr>
                        <tr>
                        <h3><strong>Members</strong>: {members[i]}</h3>
                        <h3><strong>Meeting Room: </strong> 
                                {meetRoom[i]}</h3>
                        <h3><strong>Advisor Email</strong>: {advisorEmail[i]}</h3>
                        </tr>
                        <tr>
                        <hr  className = {styles['line1']}style={{
                            color: '#000000',
                            height: .1
                        }}/>
                        </tr>
                        <div className = {styles['show-more']}>
                                <button class="button is-info" id = {clubArray[i]}>Show More</button>
                        </div>
                        </div>
                    </table>
                    </div>
                </div>
                {clubName[i+1] &&
                <div class={`column ${styles['column1']}`} style = {{
                    height: 100
                }}>
                <section className = {styles['section1']}>
                <div className = "box">
                    <div className = {styles['actual-content']}>
                    <div>
                        <tr>
                        <p class="title">{clubName[i+1]}</p>
                        </tr>
                        <div>
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag1[i+1]}</span>
                            {tag2[i+1] &&
                                <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i+1]}</span>
                            }
                            {tag3[i+1] &&
                                <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i+1]}</span>
                            }
                        </div>                   
                    </div>
                    <div>
                        <tr>
                        <hr  className = {styles['line']}style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .1,
                            borderColor : '#000000',
                        }}/>
                        </tr>
                        <tr>
                        <img src={CHEScienceOlympiadLOGOALLTRANSPARENT} alt = "logo"/>
                        </tr>
                        <tr>
                        <hr  className = {styles['line1']}style={{
                            color: '#000000',
                            height: .1
                        }}/>
                        </tr>
                        <tr>
                        <h3><strong>Members</strong>: {members[i+1]}</h3>
                        <h3><strong>Meeting Room: </strong> 
                                {meetRoom[i+1]}</h3>
                        <h3><strong>Advisor Email</strong>: {advisorEmail[i+1]}</h3>
                        </tr>
                        <tr>
                        <hr  className = {styles['line1']}style={{
                            color: '#000000',
                            height: .1
                        }}/>
                        </tr>
                        <div className = {styles['show-more']}>
                                <button class="button is-info" id = {clubArray[i+1]}>Show More</button>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
                }
                {clubName[i+2] &&
                <div class="column">
                <div className = "box">
                <table class="table">
                    <tr>
                    <p class="title">{clubName[i+2]}</p>
                    </tr>
                    <div>
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag1[i+2]}</span>
                        {tag2[i+2] &&
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i+2]}</span>
                        }
                        {tag3[i+2] &&
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i+2]}</span>
                        }
                    </div>
                    <tr>
                    <hr  className = {styles['line']}style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor : '#000000',
                    }}/>
                    </tr>
                    <tr>
                    <img src={CHEScienceOlympiadLOGOALLTRANSPARENT} alt = "logo"/>
                    </tr>
                    <tr>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        height: .1
                    }}/>
                    </tr>
                    <tr>
                    <h3><strong>Members</strong>: {members[i+2]}</h3>
                    <h3><strong>Meeting Room: </strong> 
                            {meetRoom[i+2]}</h3>
                    <h3><strong>Advisor Email</strong>: {advisorEmail[i+2]}</h3>
                    </tr>
                    <tr>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        height: .1
                    }}/>
                    </tr>
                    <div className = {styles['show-more']}>
                            <button class="button is-info" id = {clubArray[i+2]}>Show More</button>
                    </div>
                </table>
                </div>
            </div>
                }
                {clubName[i+3] &&
                <div class="column">
                <div className = "box">
                <table class="table">
                    <tr>
                    <p class="title">{clubName[i+3]}</p>
                    </tr>
                    <div>
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag1[i+3]}</span>
                        {tag2[i+3] &&
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i+3]}</span>
                        }
                        {tag3[i+3] &&
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i+3]}</span>
                        }
                    </div>
                    <tr>
                    <hr  className = {styles['line']}style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor : '#000000',
                    }}/>
                    </tr>
                    <tr>
                    <img src={CHEScienceOlympiadLOGOALLTRANSPARENT} alt = "logo"/>
                    </tr>
                    <tr>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        height: .1
                    }}/>
                    </tr>
                    <tr>
                    <h3><strong>Members</strong>: {members[i+3]}</h3>
                    <h3><strong>Meeting Room: </strong> 
                            {meetRoom[i+3]}</h3>
                    <h3><strong>Advisor Email</strong>: {advisorEmail[i+3]}</h3>
                    </tr>
                    <tr>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        height: .1
                    }}/>
                    </tr>
                    <div className = {styles['show-more']}>
                            <button class="button is-info" id = {clubArray[i+3]}>Show More</button>
                    </div>
                </table>
                </div>
            </div>
                }
                {clubName[i+4] &&
                <div class="column">
                <div className = "box">
                <table class="table">
                    <tr>
                    <p class="title">{clubName[i+4]}</p>
                    </tr>
                    <div>
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag1[i+4]}</span>
                        {tag2[i+4] &&
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i+4]}</span>
                        }
                        {tag3[i+4] &&
                            <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i+4]}</span>
                        }
                    </div>
                    <tr>
                    <hr  className = {styles['line']}style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor : '#000000',
                    }}/>
                    </tr>
                    <tr>
                    <img src={CHEScienceOlympiadLOGOALLTRANSPARENT} alt = "logo"/>
                    </tr>
                    <tr>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        height: .1
                    }}/>
                    </tr>
                    <tr>
                    <h3><strong>Members</strong>: {members[i+4]}</h3>
                    <h3><strong>Meeting Room: </strong> 
                            {meetRoom[i+4]}</h3>
                    <h3><strong>Advisor Email</strong>: {advisorEmail[i+4]}</h3>
                    </tr>
                    <tr>
                    <hr  className = {styles['line1']}style={{
                        color: '#000000',
                        height: .1
                    }}/>
                    </tr>
                    <div className = {styles['show-more']}>
                            <button class="button is-info" id = {clubArray[i+4]}>Show More</button>
                    </div>
                </table>
                </div>
            </div>
                }
            </div>

            </div>
        )
    }

    for (let i = 0; i < clubName.length; i++) {
        modals.push(
            <div class="modal" id = {`modal${clubArray[i]}`}>
            <div class="modal-background"  id = {`modalbg${clubArray[i]}`}></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <div class={`modal-card-title ${styles['header']}`}>{clubName[i]}
                    <div>
                    <span class={"tag is-info is-light"}>{tag1[i]}</span>
                    {tag2[i] &&
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag2[i]}</span>
                    }
                    {tag3[i] &&
                        <span class={`tag is-info is-light ${styles['tag-f']}`}>{tag3[i]}</span>
                    }
                    </div>
                </div>
                <button class="delete" aria-label="close" id = {`delete${clubArray[i]}`}></button>
                </header>
                <section class="modal-card-body">
                    <section class="section">
                        <h1 class="title">Description</h1>
                        <h2 class="subtitle">
                            {description[i]}
                        </h2>
                    </section>  
                    <section class="section">
                        <h1 class="title">What Do You Do?</h1>
                        <h2 class="subtitle">
                            {whatToDo[i]}
                        </h2>
                    </section>  
                    <section class="section">
                        <h1 class="title">Contact Information</h1>
                        <h2 class="subtitle">
                            <div className = "columns is-mobile">
                                <div className = "column">
                                    <h3><strong>Number of Members:</strong> {members[i]}</h3>
                                    <h3><strong>Number of Officers:</strong> {officers[i]}</h3>
                                    <h3><strong>Months Active: </strong>{activeMonths[i]}</h3>
                                    <h3><strong>President: </strong>{presName[i]}</h3>
                                </div>
                                <div className = "column">
                                <h3><strong>Meeting Room: </strong> {meetRoom[i]}</h3>
                                <h3><strong>Advisor:</strong> {advisorName[i]}</h3>
                                <h3><strong>Advisor Email</strong>: {advisorEmail[i]}</h3>
                                
                                </div>
                            </div>
                            {instaLink[i] &&
                            <a href = {instaLink[i]}>
                            <button class={`button is-danger ${styles['link-button']}`}>
                                <span class="icon is-medium">
                                <i className="fab fa-instagram"></i>
                                </span>
                                <span>Instagram</span>
                            </button>
                            </a>
                            }
                            {gcLink[i] &&
                            <a href = {gcLink[i]}>
                            <button class={`button is-success ${styles['link-button']}`}>
                                <span class="icon is-medium">
                                <i class="fab fa-google"></i>
                                </span>
                                <span>Google Classroom</span>
                            </button>
                            </a>
                            }
                        </h2>
                    </section>  
                </section>
            </div>
            </div>
        )
    }

    return(
        <div>
            {items}
            {modals}
        </div>
    );

}