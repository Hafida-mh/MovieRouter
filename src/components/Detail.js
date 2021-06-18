import React from 'react'
import './Detail.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";

function Detail() {
     const [dataa, setDataa] = useState()
     const history = useHistory()
     const {id} = useParams()

    const getInfo = async () => {
        try {
            const {data}  = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=43b746b767edc8522cb6200aa1821bcb`)
            setDataa(data)
        }
        catch (error) {
            console.log(error)
        }
    }


dataa && console.log(dataa)

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className="Detail">
            <div className="detail-content">
                <div className="container">
                    <div className="side pictureMovie">
                        <img src={dataa && `https://image.tmdb.org/t/p/w500/${dataa.poster_path}`} alt="imageMovie" />
                    </div>
                    <div className="side overviewMovie">
                        <h2> {dataa && dataa.original_title} </h2>
                        <p> {dataa && dataa.overview} </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detail
