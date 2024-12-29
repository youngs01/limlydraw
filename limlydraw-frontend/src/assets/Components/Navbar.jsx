import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg px-0 px-md-4  mt-2  ">
  <div class="container-fluid px-0 d-flex align-items-center justify-content-between">
    <a class="navbar-brand fw-bold fs-35" href="/">LimlyDraw</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ps-3 " id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active fs-16 fw-semibold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-16 fw-semibold" aria-current="page" href="#">What's new</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-16 fw-semibold" aria-current="page" href="#">About us</a>
        </li>
      </ul>
      <span class="navbar-text d-fex">
        <Button content={"Login"} icon={"fa-solid fa-user"} className={" px-5 py-2 gap-2 "} /><Button/> 
      </span>
    </div>
  </div>
</nav>
  )
}

export default Navbar