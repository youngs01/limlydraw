import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="main-banner">
    <div className="container">
    <div className="row">
    <div className="col col-md-6">    
    <h2>Sketch Ideas, <span className='banner-txt' >Collaborate </span>Anywhere</h2>
    <p>A simple, powerful whiteboard tool for teams and creators.</p>
    <div className="d-flex align-items-center gap-3">
    {/* <button className='btn btn-dark'>Start Drawing <i class="fa-solid fa-rocket"></i></button> */}
    {/* <button className='btn btn-info'>Learn More <i class="fa-solid fa-chalkboard"></i></button> */}
    </div>{/***flex */}

    </div> {/**col */}

    <div className="col col-md-6 text-end">
        <img src="src/assets/images/banner-img.jpg" alt=""  />
    </div>
    </div>{/***row */}
    </div>
    </div>{/* main banner */}
    </>
  )
}

export default Banner