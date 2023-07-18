import React from 'react'
import CardImgOne from '../../img/amazon.svg'
import CardImgTwo from '../../img/tmus.svg'
import CardImgThree from '../../img/star.svg'

export const LeftBox = () => {
    const cardDate=[
        {"name":"TMUS",
        "date":"Apr 26, 2023",
        "img":CardImgOne,
        "time":"15",
        "title":"Cable Companies and Mobile Carriers Battle Over Fixed Wireless Internet",
        "tagLine":"Wall Street Journal | Patience Haggin",
        "description":"Comcast and Charter Communications have lost customers to their less-expensive rival plans. But they insist customers will return to broadband.",},
        {"name":"AMZM",
        "date":"Apr 26, 2023",
        "img":CardImgTwo,
        "time":"15",
        "title":"Morgan Stanley’s Top 5 Stock Picks For 2023",
        "tagLine":"Wall Street Journal | Patience Haggin",
        "description":"Comcast and Charter Communications have lost customers to their less-expensive rival plans. But they insist customers will return to broadband.",},
        {"name":"SBUX",
        "date":"Apr 26, 2023",
        "img":CardImgThree,
        "time":"15",
        "title":"Why Starbucks (SBUX) Stock Reacted the Way It Did After Good Earnings",
        "tagLine":"Wall Street Journal | Patience Haggin",
        "description":"Comcast and Charter Communications have lost customers to their less-expensive rival plans. But they insist customers will return to broadband.",},
    ]
  return (
            <div class="leftBox col-lg-auto col order-lg-1 order-5 ps-lg-0">
                <div className='leftBox-inner p-3'>
                <div class="heading d-flex justify-content-between">
                    <div class="my-auto">
                        <h3 class="mb-0">News Bulletin</h3>
                    </div>
                    <div>
                        <button class="btn p-0 all-center"><i class="fa-solid fa-ellipsis"></i></button>
                    </div>
                </div>

                <div className='news-card-box'>
                    {cardDate.map((item)=>(
                    <div class="news-card mt-4">
                        <div class="row card-heading">
                            <div class="col-9 d-flex pe-0">
                                <div class="cart-img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div class="my-auto ms-2">
                                    <h5 class="mb-0">{item.name}</h5>
                                </div>
                                <div class="ms-2">
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <div class="col-3 text-end ps-0">
                                <span>{item.time}hr ago</span>
                            </div>
                        </div>
                        <div class="card-detail">
                            <h2 class="mt-3">{item.title}</h2>
                            <span class="">{item.tagLine}</span>
                            <p class="mt-2">{item.description}</p>
                        </div>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Read more</button>
                    </div>
                    ))}
                </div>
                    
                </div>


            </div>
  )
}
