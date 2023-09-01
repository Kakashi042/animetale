import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { animeDetails, readAnime } from '../store/AnimeSlice';
import '../styles/Details.scss'

const Details = () => {
    const {mal_id} = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        if(!isNaN(mal_id)){
            dispatch(animeDetails(mal_id))
        }
    },[])

    const anime = useSelector((state)=>state.app.anime.data)

    console.log(anime)
    
  return (
    <div className='details'>
        {anime && 
        (<>
        <div className='detail-left'>
            <img src={`${anime.images.webp.large_image_url}`}/>
            <div className='header-details'>
            <h1>{anime.title}</h1>
            <p>{anime.year}</p>
            </div>
        </div>
        <div className='detail-right'>
            <h2>
            SYNOPSIS
            </h2>
            <hr />
            <p>
            {anime.synopsis}
            </p>
        </div>
        </>
        )}
    </div>
  )
}

export default Details