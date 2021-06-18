import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Nav(props) {
   


    return (
        <div className="NavBar">
            <div className="navContent">
                <div className="searchSelect">
                    <div className="content">
                        <Link to="/now_playing">  <button onClick={() => props.clickTop}> <i class="fas fa-home"></i> Accueil </button> </Link>
                        <Link to="/popular">  <button onClick={() => props.clickPopular}> <i class="fas fa-fire-alt"></i> Popular Movies </button> </Link>
                        <Link to="/top_rated"><button>  <i class="fas fa-star"></i> Top Movies </button></Link>
                        
                    </div>
                </div>
                <div className="searchInput">
                    <div className="contentInput">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input onChange={props.onchange}  value={props.value} placeholder="Looking for a movie ?" />
                            <button> SEARCH </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
