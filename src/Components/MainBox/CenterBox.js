import React, { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import {Bar} from "react-chartjs-2"
import { EventCard } from './EventCard'
import smileImg from '../../img/Smiling.svg'

export const CenterBox = () => {
    const [tradeOne,setTradeOne]=useState("0");

    const tradeToggle =()=>{
        if(tradeOne==="0")
        {
            setTradeOne("1")
         return;
        }
            setTradeOne("0")
    }
    const [tradeTwo,setTradeTwo]=useState("0");
    const tradeToggleTwo =()=>{
        if(tradeTwo==="0")
        {
            setTradeTwo("1")
         return;
        }
            setTradeTwo("0")
    }
    const [tradeThree,setTradeThree]=useState("0");
    const tradeToggleThree =()=>{
        if(tradeThree==="0")
        {
            setTradeThree("1")
         return;
        }
            setTradeThree("0")
    }
    //Trending Trades Chart
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
  return (
    <div className="centerBox mx-auto col-lg-auto col order-2">
        <div className="trade-box p-3  overflow-hidden mt-lg-0 mt-md-0 mt-4">
            <div className="heading d-flex justify-content-between">
                <div className="my-auto">
                    <h3 className="mb-0">Trending Trades</h3>
                </div>
                <div>
                    <button className="btn p-0 all-center"><i className="fa-solid fa-ellipsis"></i></button>
                </div>
            </div>
            <div className="trader-cardbox p-3 ps-1 mt-2">
                
                <div className={`trade-card text-center justify-content-center ms-0 ${tradeOne==1?"blue-card":""}`}>
                    <h4>{tradeOne==1?"Devil’s Advocate: Buy":"Sell"}</h4>
                    <span>(medium-term)</span>
                    <p>Inflationary envr. hurts consumer spending on discretionary goods.</p>
                    <div className="d-flex justify-content-center">
                        <div>
                            <img src={"img/amazon.svg"} alt="" />
                        </div>
                        <div className="my-auto ms-2">
                            <h5 className="mb-0">Amazon AMZN</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center price mt-2">
                        <span >$110.82</span>
                        <span className="text-success ms-3">0.98%</span>
                    </div>
                    <div className="chartBox">
                        <Bar data={datafill} options={option}/>
                    </div>
                    <div className="time">
                        <span>Update Apr 02, 10:13 AM</span>
                    </div>
                    <div className="row m-0 mt-2">
                        <div className="col-8 ps-0 d-flex likeBox my-auto">
                            <div>
                                <i className="fa-regular fa-thumbs-up me-2"></i>224
                            </div>
                            <div className="ms-2">
                                <i className="fa-regular fa-thumbs-up me-2"></i>224
                            </div>
                        </div>
                        <div className="col-4">
                            <button className="btn p-0 all-center"><img src={smileImg} alt="" onClick={tradeToggle}/></button>
                        </div>
                    </div>
                </div>
                <div className={`trade-card text-center justify-content-center ${tradeTwo==1?"blue-card":""}`}>
                    <h4>{tradeTwo==1?"Devil’s Advocate: Buy":"Sell"}</h4>
                    <span>(medium-term)</span>
                    <p className="text-gray">Inflationary envr. hurts consumer spending on discretionary goods.</p>
                    <div className="d-flex justify-content-center">
                        <div>
                            <img src="img/starb.svg" alt=""/>
                        </div>
                        <div className="my-auto ms-2">
                            <h5 className="mb-0">Starbucks SBUX</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center price mt-2">
                        <span>$110.82</span>
                        <span className="text-success ms-3">0.98%</span>
                    </div>
                    <div className="chartBox">
                        <Bar data={datafill} options={option}/>
                    </div>
                    <div className="time">
                        <span>Update Apr 02, 10:13 AM</span>
                    </div>
                    <div className="row m-0 mt-2">
                        <div className="col-8 ps-0 d-flex likeBox my-auto">
                            <div>
                                <i className="fa-regular fa-thumbs-up me-1"></i>224
                            </div>
                            <div className="ms-2">
                                <i className="fa-regular fa-thumbs-up me-1"></i>224
                            </div>
                        </div>
                        <div className="col-4">
                            <button className="btn p-0 all-center" onClick={tradeToggleTwo}><img src={smileImg} alt=""/></button>
                        </div>
                    </div>
                </div>
                <div className={`trade-card text-center justify-content-center ${tradeThree==1?"blue-card":""}`}>
                    <h4>{tradeThree==1?"Devil’s Advocate: Buy":"Sell"}</h4>
                    <span>(medium-term)</span>
                    <p>Inflationary envr. hurts consumer spending on discretionary goods.</p>
                    <div className="d-flex justify-content-center">
                        <div>
                            <img src="img/tmus.svg" alt=""/>
                        </div>
                        <div className="my-auto ms-2">
                            <h5 className="mb-0">TMUS</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center price mt-2">
                        <span>$110.82</span>
                        <span className="text-success ms-3">0.98%</span>
                    </div>
                    <div className="chartBox">
                        <Bar data={datafill} options={option}/>
                    </div>
                    <div className="time">
                        <span>Update Apr 02, 10:13 AM</span>
                    </div>
                    <div className="row m-0 mt-2">
                        <div className="col-8 ps-0 d-flex likeBox my-auto">
                            <div>
                                <i className="fa-regular fa-thumbs-up me-2"></i>224
                            </div>
                            <div className="ms-2">
                                <i className="fa-regular fa-thumbs-up me-2"></i>224
                            </div>
                        </div>
                        <div className="col-4">
                            <button className="btn p-0 all-center" onClick={tradeToggleThree}><img src={smileImg} alt=""/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="event-box box-shadow bg-white p-3 mt-4 rounded  mb-lg-0 mb-md-4 mb-4">
            <div className="heading d-flex justify-content-between">
                <div className="my-auto">
                    <h3 className="mb-0">Realtime Event Taxonomy</h3>
                </div>
                <div>
                    <button className="btn p-0 all-center"><i className="fa-solid fa-ellipsis"></i></button>
                </div>
            </div>
            <EventCard/>
            
        </div>

    </div>
  )
}
