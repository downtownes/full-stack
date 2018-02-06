import React from 'react';
import bankSvg from './communityBank.svg';
import './Home.css'

export default function Home() {
    return(
    <div>
        <img src={bankSvg}/>
        <a href={process.env.REACT_APP_LOGIN}>
            <button>Kenny Logins</button>
        </a>
    </div>
    )
}