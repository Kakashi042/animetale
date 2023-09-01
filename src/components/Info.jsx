import React from 'react'
import '../styles/Info.scss'

const Info = () => {
  return (
    <div className='info'>
        <h1>Description on the project</h1>
        <hr />
        <p>
            I had fun while making the project. Some lorem dipsum blah blah....
        </p>
        {/* <p>
            The below are the features with which the project has been deployed
        </p> */}
            <h2> About the Project</h2>
            <p>API has been taken from <a href='https://docs.api.jikan.moe/' style={{color:'blue'}} target='_blank'>here</a></p>
            <span>All the data and the information is credited to Jikan API. The application provides details on more than 12000 anime. The search feature filters out the anime required.</span>
            <h2>Features deployed</h2>
        <ul>
            <li>Routing</li>
            <li>Redux state management</li>
            <li>Async Thunk</li>
            <li>Infinte scroll with async load for home page and search page</li>
            <li>Hooks: useState, useEffect, useSelector, useDispatch, useParams</li>
        </ul>
    </div>
  )
}

export default Info