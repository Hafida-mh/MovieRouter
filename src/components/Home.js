import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Style from './Home.css'
import Nav from './Nav.js'
import {useHistory,useParams} from 'react-router-dom'

function Home() {
    const [movies, setMovies] = useState()
    let {page}= useParams() 
    // const [page, setPage] = useState("now_playing")
    const [inputValue, setInputValue] = useState("")
    const history = useHistory()
    const getData = async () => {
        try {
            if(!page) page = "now_playing"
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${page}?api_key=43b746b767edc8522cb6200aa1821bcb&language=en-US`)
            setMovies(data);
            console.log(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [page])

    return (
        <div>
               <Nav onchange={(e) => setInputValue(e.target.value)} value={inputValue} />
               <div class="movieContainer"> 
            {movies && movies.results.filter((elem) => elem.title.toUpperCase().includes(inputValue.toUpperCase())).map((elem) => {
                return (<div className="boxMovie" onClick={()=>history.push(`/${elem.id}`)}>
                    <div className="posterMovie">
                        <img alt="imgMovie" src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} />
                    </div>

                    <div className="informations">
                        <h2> {elem.title} </h2>
                        <div className="detailsInfo">
                            <p> Popularité </p> <p> language </p> <p> Release date </p> <p> Vote Count" </p>
                            <p> {elem.popularity} </p> <p> {elem.original_language}</p> <p> {elem.release_date} </p> <p> {elem.vote_count} </p>
                        </div>

                    </div>
                </div>)
            })}

</div>
        </div>
    )
}

export default Home
