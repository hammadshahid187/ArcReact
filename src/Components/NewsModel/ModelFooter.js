import React from 'react'
import logo from "../../img/lightLogo.svg"
import sub from "../../img/sub.svg"
import "./Model.css"

export const ModelFooter = () => {
  return (
    <div className='row m-0 py-5 mt-5'>
      <div className='col-lg-4 col-12 footer-logo d-flex justify-content-lg-start justify-content-center'>
        <img src={logo} />
        <a href='' className='ms-3 my-auto text-dark'><i class="fa-brands fa-square-facebook"></i></a>
        <a href='' className='ms-3 my-auto text-dark'><i class="fa-brands fa-square-instagram"></i></a>
        <a href='' className='ms-3 my-auto text-dark'><i class="fa-brands fa-square-twitter"></i></a>
      </div>
      <div className='col-lg-5 col-md-6 col-12 py-lg-0 py-4'>
        <span className='fs-15 fw-bold'>Subscribe to our newsletter</span>
        <div className='sub-box d-flex mt-2'>
          <input type='text' className='w-100' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-12 footer-img text-lg-end text-center'>
        <img src={sub} alt='' />
      </div>
    </div>
  )
}
