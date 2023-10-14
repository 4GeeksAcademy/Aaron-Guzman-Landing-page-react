import React from 'react'

const Card = (props) => {
  return (
    <div className='row'>
      <div className="card mx-3" style={{ width: '18rem' }}>
        <img src={props.image} className="card-img-top" alt="Main-image" width= '100'/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.paragraph}</p>
          <a href="#" className="btn btn-primary">Ve pa otro lado</a>
        </div>
      </div>
    </div>
  )
}

export default Card