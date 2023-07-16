import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Bar } from "react-chartjs-2"
import './EventModel.css'
import CardImgOne from '../../img/amazon.svg'
import CardImgTwo from '../../img/tmus.svg'
import CardImgThree from '../../img/star.svg'
import smileImg from '../../img/Smiling.svg'
import tradeImg from '../../img/a.svg'
import bookIcon from '../../img/BookIcon.svg'
import eventIcon from '../../img/Event.svg'
import articleIcon from '../../img/Article.svg'

export const EventModel = () => {

    const datafill = {
        labels: ['W 1', 'W 2', 'W 3', 'W 4', 'W 5', 'W 6', 'W 7', 'W 1', 'W 2', 'W 3', 'W 4', 'W 5', 'W 6', 'W 7'],
        datasets: [{
        type: "line",
        label: 'Weekly Sales',
        pointRadius: 0,
        lineTension: 0.1,
        borderWidth: 2,
        data: [5, 6, 4, 6, 2, 8, 9, 3, 5, 6, 4, 6, 2, 8, 9, 3],
        borderColor: 'rgb(4,202,0)',
        backgroundColor: (context) => {
            const bgColor = [
            'rgba(204,242,239, 0.2)',
            'rgba(204,242,239, .5)',
            'rgba(204,242,239, .2)',
            'rgba(204,242,239, .2)',
            ];
            if (!context.chart.chartArea) {
            return;
            }
            const { ctx, data, chartArea: { top, bottom } } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0])
            gradientBg.addColorStop(0.5, bgColor[1])
            gradientBg.addColorStop(1, bgColor[2])
            return gradientBg;
        },
        fill: 'start',
        },]
    };
    const option = {
        indexAxis: 'x',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
        bar: {
            borderWidth: 0.5,
        },
        },
        scales: {
        x: {
            display: false,
            grid: {
            display: false
            },
            min: 0,
            max: 12,
            ticks: {
            // forces step size to be 50 units
            stepSize: 4
            }
        },
        y: {
            display: false,
            grid: {
            display: false
            },
            min: 0,
            max: 12,
            ticks: {
            // forces step size to be 50 units
            stepSize: 4
            }
        }
        },
        responsive: true,

        plugins: {
        legend: {
            display: false
        },
        }
    }
    const cardDate=[
        {"name":"TMUS",
        "date":"Apr 26, 2023",
        "img":CardImgOne,
        "time":"15",
        "title":"Cable Companies and Mobile Carriers Battle",
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
        "title":"Why Starbucks (SBUX) Stock Reacted the Way",
        "tagLine":"Wall Street Journal | Patience Haggin",
        "description":"Comcast and Charter Communications have lost customers to their less-expensive rival plans. But they insist customers will return to broadband.",},
        {"name":"TMUS",
        "date":"Apr 26, 2023",
        "img":CardImgOne,
        "time":"15",
        "title":"Cable Companies and Mobile Carriers Battle",
        "tagLine":"Wall Street Journal | Patience Haggin",
        "description":"Comcast and Charter Communications have lost customers to their less-expensive rival plans. But they insist customers will return to broadband.",},
        {"name":"AMZM",
        "date":"Apr 26, 2023",
        "img":CardImgTwo,
        "time":"15",
        "title":"Morgan Stanley’s Top 5 Stock Picks For 2023",
        "tagLine":"Wall Street Journal | Patience Haggin",
        "description":"Comcast and Charter Communications have lost customers to their less-expensive rival plans. But they insist customers will return to broadband.",},
    ]
  return (
    <div className='row m-0'>
        <div className='col-lg-8 col-md-8 col-12'>
            <div class="row m-0 pe-lg-3">
                <div class="col-lg-3 col-6 ps-0 my-lg-auto my-md-auto my-3">
                    <h4 class="mb-0 fw-bold">Cluster 1</h4>
                </div>
                <div class="col-lg-3 ms-auto my-auto col-6 ">
                    <button class="btn p-0 all-center shadow-btn ms-auto text-primary"><i class="fa-solid fa-thumbtack"></i></button>
                </div>
            </div>
            <p className='mt-3 f-15 mb-4 pe-lg-3'>Lululemon, the athletic apparel maker, closed at $381.44 in the latest trading session, experiencing a slight decrease of 0.11%. However, this decline was narrower than the daily loss of 0.46% for the S&P 500. Lululemon has shown strong performance over the past month, with a gain of 5.09%, outperforming the Consumer Discretionary sector and the S&P 500. The company is expected to report earnings per share (EPS) of $1.93, a 30.41% increase from the previous year, and quarterly revenue of $1.93 billion, a 19.48% increase. The full-year estimates project earnings of $11.48 per share and revenue of $9.38 billion, representing year-over-year changes of 14% and 15.66%, respectively. Positive revisions in analyst estimates are seen as a positive sign for the company's outlook, and Lululemon currently holds a Zacks Rank of #3 (Hold). In terms of valuation, Lululemon has a higher Forward P/E ratio and PEG ratio compared to its industry averages.</p>
            <span className='f-11 float-end pe-lg-3'>Dec. 26, 2022 at 5:52 am</span>
            <div className='row m-0 w-100'>
            {cardDate.map((item)=>(
                <div className='col-lg-6 col-12 p-0 pe-lg-3'>
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
                </div>
                ))}
            </div>
        </div>
        <div className='col-lg-4 col-md-4 col-12'>
            <div className='bg-white box-shadow p-3 rounded-3 mt-lg-0 mt-4'>
                <h5 className='f-18 border-bottom pb-3'><img src={eventIcon} alt='' className='me-2' />Event’s market impact:</h5>
                <h4 className='f-26 text-center mt-3'>Medium Impact</h4>
                <p className='f-15 text-secondary mt-3'>While the products announced by Samsung - a leading player in the tech industry - are significant and potentially game-changing, they are also somewhat expected. The new versions of the Z Fold and Z Flip, the Galaxy Watch, and the Galaxy Buds represent incremental upgrades rather than entirely new products or market entries.</p>
                <div className="ps-0 d-flex likeBox my-auto f-17 text-primary">
                <div className=' my-auto'>
                    <i className="fa-regular fa-thumbs-up me-2"></i>224
                </div>
                <div className="mx-2 my-auto">
                    <i className="fa-regular fa-thumbs-up me-2"></i>224
                </div>
                </div>
            </div>
            <div className='bg-white box-shadow p-lg-3 rounded-3 mt-4 trade-card w-100 m-0'>
                <h5 className='f-18 border-bottom pb-3'>Potential Trades</h5>

                <div className='mt-4'>
                <div className='d-flex mb-3'>
                    <div>
                    <img src={tradeImg} alt='' />
                    </div>
                    <div className='ms-3'>
                    <span className='f-18 fw-bold'>Alphabet GOOGL</span>
                    </div>
                </div>
                <span className='f-18 fw-bold'>$123.83</span>
                <span className='f-14 text-success fw-bold d-block '>0.98%</span>
                <div className="">
                    <Bar data={datafill} options={option} height={17} width={49} />
                </div>
                <span className='f-15 d-block text-center my-3'>Update Apr 02, 10:13 AM</span>
                </div>

                <div>
                <h4 className='f-26 text-center border-top pt-3'>Sell</h4>
                <div className='text-center'>
                    <span className='f-14 text-center w-100'>(medium-term)</span>
                </div>
                <p>Google's collaboration with Samsung on the new Galaxy Watches, using revamped Wear OS, will boost Google's wearables market share, potentially driving up Google's revenue.</p>
                </div>

                <div className="row m-0 mt-2">
                <div className="col-8 ps-0 d-flex likeBox my-auto f-17 text-primary">
                    <div>
                    <i className="fa-regular fa-thumbs-up me-2"></i>224
                    </div>
                    <div className="ms-2">
                    <i className="fa-regular fa-thumbs-up me-2"></i>224
                    </div>
                </div>
                <div className="col-4">
                    <button className="btn p-0 all-center ms-auto"><img src={smileImg} alt="" /></button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
