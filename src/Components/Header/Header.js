import React, { useState } from 'react'
import logo from '../../img/logo.svg'
import logoTwo from '../../img/logo.svg'
import userImg from '../../img/user.svg'
import "./Header.css"

export const Header = () => {
  const [nav,setNav]=useState("0");
  const [chatbox,setchatbox]=useState("0");
  const [newChat,setNewChat]=useState("0");
  const [tradetag,setTradetag]=useState("0");
  return (
    <section id="navbar" className="bg-white">
      <div className="d-lg-none d-md-none d-flex w-100 py-4 px-3">
        <div className="logo py-0 my-auto ps-lg-0 ps-md-0 ps-2" >
          <img src={logoTwo} alt="" />
        </div>
        <div className="d-lg-none d-md-none d-lg-flex my-auto ms-auto fs-1 pe-3 menuBtn pointer-courser" onClick={()=>setNav("1")}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="row m-0 position-lg-relative position-md-relative position-absolute w-100 bg-white">

        <div className={`col-12 d-flex nav-box w-100 ${nav==1?"open":""}`}>
          <div className="d-flex">
            <div className="logo my-auto ps-lg-0 ps-md-0 ps-2" >
              <img src={logo} alt="" />
            </div>
            <div className="d-lg-none d-md-none d-lg-flex my-auto ms-auto fs-1 pe-3 closebtn pointer-courser" onClick={()=>setNav("0")}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className="d-lg-flex d-md-flex w-100 navbarBox">
            <div className="searchBox w-100 d-flex">
              <i className="fa-solid fa-magnifying-glass my-auto ms-3 me-2"></i>
              <input type="text" placeholder="Search" id="searchBox"  onClick={()=>setchatbox("1")}/>

              <div className={`chat-box text-center pb-3 ${chatbox==1?"":"d-none"}`}>
                <div className={`first-headbox px-3 ${newChat==1?"d-none":""}`}>
                  <h3 className="text-center py-3">ArcaGPT</h3>
                  <div>
                    <span><i className="fa-regular fa-message me-2"></i>What stocks are insiders trading?</span>
                  </div>
                  <div className="mt-4">
                    <span><i className="fa-regular fa-message me-2"></i>ESG focused companies NASDAQ</span>
                  </div>
                  <button className="btn w-100 m-0 all-center mt-4 addChatBtn" onClick={()=>setNewChat("1")}><i className="fa-solid fa-plus me-2"></i>New chat</button>
                </div>
                <div className={`second-headbox ${newChat==1?"":"d-none"}`}>
                  <h3 className="text-center py-3">Chat Arcafeed</h3>
                  <div className="qa-box text-start d-flex border py-2 px-3">
                    <div className="qa-icon all-center">
                      <i className="fa-regular fa-message"></i>
                    </div>
                    <div className="ms-2 my-auto">
                      <p className="m-0">What is the Amazon environment like now?</p>
                    </div>
                  </div>
                  <div className="qa-box text-start d-flex py-2 px-3 bg-darkgray">
                    <div>
                      <div className="qa-icon all-center">
                        <i className="fa-regular fa-message"></i>
                      </div>
                    </div>
                    <div className="ms-2 my-auto">
                      <p className="m-0">The current economic environment is indeed hurting Amazon. But this is a temporary situation. And Amazon has the strength to weather this storm. The company is even improving its cost structure, which could help it excel in the future.</p>
                    </div>
                  </div>
                </div>
                <div className="px-3 chat-footer">
                  <div className="chat-send mb-2">
                    <input type="text" name="" id="" placeholder="Send a message." />
                    <button className="btn p-0"><img src="img/Icon.svg" alt="" /></button>
                  </div>
                  <span className="text-center">Research Preview by Arcafeed</span>
                </div>
              </div>
            </div>
            <div className="ms-67 my-lg-auto my-md-auto my-3 me-0 px-3 d-lg-flex d-md-none ps-0 d-block col order-lg-1 order-ms-1 order-2 justify-content-lg-end">
              <h5 className="mb-0 text-primary">Focus:</h5>
            </div>
            <div className="d-lg-flex d-md-none	d-block w-100 col order-lg-2 order-ms-2 order-5 market-btn position-relative">
              <button className="btn btn-primary border-0 bg-primary px-3 ms-0">Market</button>
              <button className="btn btn-primary border-0 bg-primary px-3">AMZN</button>
              <button className="btn btn-primary border-0 bg-primary px-3">TMUS</button>
              <button className="btn btn-primary border-0 bg-primary px-3">SBUX</button>
              <button className="btn add-btn all-center my-lg-auto my-md-auto my-3" onClick={()=>setTradetag("1")}><i className="fa-solid fa-plus"></i></button>
              <div className={`tradetags ${tradetag==1?"":"d-none"}`}>
                <div className='tradetag-search'>
                  <input type='text' placeholder='Search' alt='' />
                </div>
              </div>
            </div>

            <div className="my-auto d-lg-flex d-md-flex d-flex justify-content-end col order-lg-3 order-ms-3 order-1 profile-box-outer">
              <div className="profile-box all-center my-auto me-3">
                <img src={userImg} alt="" />
              </div>
              <div className="ms-0 my-auto">
                <button className="btn p-0"><i className="fa-solid fa-angle-down"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
