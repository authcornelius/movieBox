import React from 'react'
import '../App.css'

const Card = (props) => {
  return (
    <div className='col-md-3'>
      <div className=''>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}  alt="Avatar"  className=''/>

          <div className="">
            <p><b>{props.release_date}</b></p> 
            <h1>{props.title}</h1>
            <p>{props.children}</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
