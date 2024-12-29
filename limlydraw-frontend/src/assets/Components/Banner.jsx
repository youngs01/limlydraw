import React from 'react'
import Button from './Button'

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
    <Button content={"Start Drawing"} icon={"fas fa-pen-ruler"} className={"flex-row-reverse px-4 py-2 fs-18 gap-2"}/>
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