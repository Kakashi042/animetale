import React, { useEffect, useState } from 'react'
import '../styles/Home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { readAnime } from '../store/AnimeSlice';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(()=>{
        dispatch(readAnime(page))
        // dispatch(readAnime(2))
    },[page])

    const fetchData = ()=>{
        setTimeout(()=>{
            setPage(page+1)
        },1500)
    }
    const allAnime = useSelector((state)=>state.app.allAnime)

    const homePage = useSelector((state)=>state.app.homePage.pagination)

    console.log(allAnime.length)
    return (
        <div id='home'>

        {allAnime && homePage &&
            <InfiniteScroll
            dataLength={allAnime.length} //This is important field to render the next data
            next={fetchData}
            hasMore={homePage.has_next_page}
            loader={<h4 style={{ display:'block', textAlign: 'center' }}>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            <div className='home'>
            {allAnime.map((ele,id)=>(
                <Link to={`/${ele.mal_id}`}>
                <div className='card' key={id}>
                    <div className='card-top'>
                        <img src={ele.images.webp.large_image_url} alt={ele.title} />
                    </div>
                    <div className='card-bottom'>
                    <div className='card-name'>{ele.title}</div> 
                    <div className='card-rating'> {ele.rating}</div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
            </InfiniteScroll>
        }

        </div>
    )
}

export default Home