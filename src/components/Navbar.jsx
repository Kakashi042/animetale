import React, { useState } from 'react'
import '../styles/Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import { useDispatch } from 'react-redux'
import Search from './Search'
import { removeData, searchAnime } from '../store/AnimeSlice'

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [prevData, setPrevData] = useState('');
  const page = 1;

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(search!==prevData && search!==''){
      dispatch(removeData());
      dispatch(searchAnime({search,page}));
      navigate(`/search/${search}`)
      setPrevData(search);
    }
    // e.preventDefault();
    // navigate(`/search/${search}`)
    // return(
    //   <Search search={search} />
    // )
  
  }

  return (
    <nav >
      <div className='head-left'>
      <Scroll to="home" spy={true} smooth={true} offset={-200} duration={500}>
      <Link to='/' className='test1'>
        <h1 id='test1'>
          AnimeList
        </h1>
      </Link>
      </Scroll>
      </div>
      <div className='head-right'>
      <form onSubmit={handleSubmit}>
      <input type='search' onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search...'></input>
      <button><img width="20" height="20" src="https://img.icons8.com/ios-filled/20/e0e0e0/search--v1.png" alt="search--v1"/></button>
      </form>
      <Link to='/info'>
        <p>Info</p>
      </Link>
      </div>
    </nav>
  )
}

export default Navbar