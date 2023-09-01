import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import InfiniteScroll from 'react-infinite-scroll-component';
import { removeData, searchAnime } from '../store/AnimeSlice'

import { Link, useParams } from 'react-router-dom';
import '../styles/Home.scss'

const Search = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(2);
    
    const {search} = useParams();
    //dispatch(removeData())

    useEffect(()=>{
        dispatch(searchAnime({search,page}))
    },[page])

    const fetchData = () => {
        setTimeout(()=>{
            setPage(page+1)
        },1500) 
    }

    const searchdata = useSelector((state)=>state.app.search)
    const searchPage = useSelector((state)=>state.app.searchPage.pagination)
    console.log('Search',searchdata)
    return (
    
        <div id='home'>
        {searchdata && searchPage &&
            (<InfiniteScroll
            dataLength={searchdata.length} //This is important field to render the next data
            next={fetchData}
            hasMore={searchPage.has_next_page}
            loader={<h4 style={{ display:'block', textAlign: 'center' }}>Loading...</h4>}
            endMessage={
            <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
            </p>
            }>
            <div className='home'>
            {searchdata.map((ele,id)=>(
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
        )}


    </div>
  )
}

export default Search