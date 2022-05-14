import React from 'react'
import './Home.scss'
import logoEhsaanSaylani from '../images/EhsaanSaylani.jpeg'
import ehsaasSaylani from '../images/ehsaas&saylani.jpeg'


function Home() {
  return (
    <div><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={ehsaasSaylani} className="d-block w-100" alt="slide1" />
        <div className="carousel-caption d-none d-md-block">
          <h5 className='text-danger'>Saylani</h5>
          <p className='text-danger'>Saylani Playing Vital Role in All Feilds of life</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={logoEhsaanSaylani} className="d-block w-100" alt="logoEhsaanSaylani" />
        <div className="carousel-caption d-none d-md-block">
        <h5 className='text-danger'>Saylani</h5>
          <p className='text-danger'>Saylani Playing Vital Role in All Feilds of life</p>
        </div>
      </div>
     
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Home