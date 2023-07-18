import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import {Bar} from "react-chartjs-2"

import countryOne from "../../img/united-kingdom.png"
import countryTwo from "../../img/united-states.png"
import countryThree from "../../img/france.png"
import Date from "../../img/date.svg"




export const RigthBox = () => {
    // Carousel Chart Bars
    const bar = {
        labels: ['W 1', 'W 2', 'W 3', 'W 4', 'W 5', 'W 6', 'W 7', 'W 1', 'W 2', 'W 3', 'W 4', 'W 5', 'W 6', 'W 7'],
        datasets: [{
            type: "line",
            label: 'Weekly Sales',
            pointRadius: 0,
            lineTension: 0.1,
            data: [5, 6, 4, 6, 2, 8, 9, 3, 5, 6, 4, 6, 2, 8, 9, 3],
            borderColor: 'rgb(223,72,76)',
            borderWidth: 2,
            backgroundColor: (context) => {
                const bgColor = [
                    'rgba(254,230,229, 0.2)',
                    'rgba(254,230,229, .5)',
                    'rgba(254,230,229, .2)',
                    'rgba(254,230,229, .2)',
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
    // config 
      const  option= {
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

    <div className="rightBox col-lg-auto col order-lg-3 order-1 pe-lg-0">
        <div className="dateBox bg-white box-shadow p-3 rounded">
            <div className="heading d-flex justify-content-between">
                <div className="my-auto ms-auto">
                    <h3 className="mb-0 ms-auto">January</h3>
                </div>
                <div className="ms-auto">
                    <button className="btn p-0 all-center"><i className="fa-solid fa-ellipsis"></i></button>
                </div>
            </div>

            <div className="d-flex carouselbtns justify-content-center mt-3">
                
                <button className="btn prev all-center my-auto" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="btn">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active btn" aria-current="true" aria-label="Slide 1">1</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="btn" aria-label="Slide 2">2</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="btn" aria-label="Slide 3">3</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className=" btn" aria-current="true" aria-label="Slide 1">4</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="btn" aria-label="Slide 2">5</button>
                </div>
                <button className="btn next all-center my-auto" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <i className="fa-solid fa-angle-right"></i>
                </button>

            </div>

            <div className="d-flex justify-content-center my-3 mb-0">
                <div className="sliderbtn all-center">
                    <span>AMZN</span>
                </div>
                <div className="sliderbtn bg-primary text-white all-center mx-3 ">
                    <span>TMUS</span>
                </div>
                <div className="sliderbtn all-center">
                    <span>SBUX</span>
                </div>
            </div>

            <div className="btn dotbtn w-100">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active btn" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="btn" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="btn" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className=" btn" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="btn" aria-label="Slide 2"></button>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="slider-box">
                        <div className="chart-box position-relative">
                            <div className="row m-0 logo-price w-100">
                                <div className="col-4 ms-auto">
                                    <img src={Date}  alt=""/>
                                </div>
                                <div className="col-4 me-auto">
                                    <div className="text-end">
                                        <span className="fw-bold text-gray me-1">$</span><span className="fw-bold">148.08</span>
                                    </div>
                                    <div className="text-danger text-end fw-bold smallest-font">1.28%</div>

                                </div>
                            </div>
                            <Bar data={bar} options={option}/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slider-box">
                        <div className="chart-box position-relative">
                            <div className="row m-0 logo-price w-100">
                                <div className="col-4 ms-auto">
                                    <img src={Date} alt=""/>
                                </div>
                                <div className="col-4 me-auto">
                                    <div className="text-end">
                                        <span className="fw-bold text-gray me-1">$</span><span className="fw-bold">148.08</span>
                                    </div>
                                    <div className="text-danger text-end fw-bold smallest-font">1.28%</div>

                                </div>
                            </div>
                            <Bar data={bar} options={option}/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slider-box">
                        <div className="chart-box position-relative">
                            <div className="row m-0 logo-price w-100">
                                <div className="col-4 ms-auto">
                                    <img src={Date} alt=""/>
                                </div>
                                <div className="col-4 me-auto">
                                    <div className="text-end">
                                        <span className="fw-bold text-gray me-1">$</span><span className="fw-bold">148.08</span>
                                    </div>
                                    <div className="text-danger text-end fw-bold smallest-font">1.28%</div>

                                </div>
                            </div>
                            <Bar data={bar} options={option}/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slider-box">
                        <div className="chart-box position-relative">
                            <div className="row m-0 logo-price w-100">
                                <div className="col-4 ms-auto">
                                    <img src={Date} alt=""/>
                                </div>
                                <div className="col-4 me-auto">
                                    <div className="text-end">
                                        <span className="fw-bold text-gray me-1">$</span><span className="fw-bold">148.08</span>
                                    </div>
                                    <div className="text-danger text-end fw-bold smallest-font">1.28%</div>

                                </div>
                            </div>
                            <Bar data={bar} options={option}/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slider-box">
                        <div className="chart-box position-relative">
                            <div className="row m-0 logo-price w-100">
                                <div className="col-4 ms-auto">
                                    <img src={Date} alt=""/>
                                </div>
                                <div className="col-4 me-auto">
                                    <div className="text-end">
                                        <span className="fw-bold text-gray me-1">$</span><span className="fw-bold">148.08</span>
                                    </div>
                                    <div className="text-danger text-end fw-bold smallest-font">1.28%</div>

                                </div>
                            </div>
                            <Bar data={bar} options={option}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="signalBox d-lg-block d-md-none d-none box-shadow rounded bg-white mt-4">
            <div className="header bg-white p-3 position-relative">
                <div className="flags d-flex">
                    <img src={countryOne} alt=""/>
                    <img src={countryTwo} alt=""/>
                    <img src={countryThree} alt=""/>
                    <span>+12</span>
                    <i className="fa-solid fa-signal text-primary ms-4 ps-5"></i>
                </div>
            </div>
            <div className="p-3 py-2 bg-gray smallest-font fw-bold">
                <span>April 29</span>
            </div>
            <div>
                <div className="signalbox-bar d-flex">
                    <div>
                        <div className="bar all-center mb-1 smallest-font">
                            <span>02:30</span>
                        </div>
                        <div className="d-flex smallest-font">
                            <div className="circle all-center me-2"><div className="dot"></div></div>
                            <i className="fa-solid fa-signal text-primary"></i>
                        </div>
                    </div>
                    <div className="ms-3 medium-text">
                        <span>CPI Tokyo Excl Food & Ennergy M/M*</span>
                    </div>
                    <div className="ms-auto mt-auto smallest-font">
                        <span className="text-gray">P:</span><span className="ms-2">0.4%</span>
                    </div>
                </div>
                <div className="signalbox-bar d-flex">
                    <div>
                        <div className="bar all-center mb-1 smallest-font">
                            <span>02:30</span>
                        </div>
                        <div className="d-flex smallest-font">
                            <div className="circle all-center me-2"><div className="dot"></div></div>
                            <i className="fa-solid fa-signal text-primary"></i>
                        </div>
                    </div>
                    <div className="ms-3 medium-text">
                        <span>CPI Tokyo Excl Food & Ennergy M/M*</span>
                    </div>
                    <div className="ms-auto mt-auto smallest-font">
                        <span className="text-gray">P:</span><span className="ms-2">0.4%</span>
                    </div>
                </div>
                <div className="signalbox-bar d-flex">
                    <div>
                        <div className="bar all-center mb-1 smallest-font">
                            <span>02:30</span>
                        </div>
                        <div className="d-flex smallest-font">
                            <div className="circle all-center me-2"><div className="dot"></div></div>
                            <i className="fa-solid fa-signal text-primary"></i>
                        </div>
                    </div>
                    <div className="ms-3 medium-text">
                        <span>CPI Tokyo Excl Food & Ennergy M/M*</span>
                    </div>
                    <div className="ms-auto mt-auto smallest-font">
                        <span className="text-gray">P:</span><span className="ms-2">0.4%</span>
                    </div>
                </div>
                <div className="signalbox-bar d-flex">
                    <div>
                        <div className="bar all-center mb-1 smallest-font">
                            <span>02:30</span>
                        </div>
                        <div className="d-flex smallest-font">
                            <div className="circle all-center me-2"><div className="dot"></div></div>
                            <i className="fa-solid fa-signal text-primary"></i>
                        </div>
                    </div>
                    <div className="ms-3 medium-text">
                        <span>CPI Tokyo Excl Food & Ennergy M/M*</span>
                    </div>
                    <div className="ms-auto mt-auto smallest-font">
                        <span className="text-gray">P:</span><span className="ms-2">0.4%</span>
                    </div>
                </div>
                <div className="signalbox-bar d-flex">
                    <div>
                        <div className="bar all-center mb-1 smallest-font">
                            <span>02:30</span>
                        </div>
                        <div className="d-flex smallest-font">
                            <div className="circle all-center me-2"><div className="dot"></div></div>
                            <i className="fa-solid fa-signal text-primary"></i>
                        </div>
                    </div>
                    <div className="ms-3 medium-text">
                        <span>CPI Tokyo Excl Food & Ennergy M/M*</span>
                    </div>
                    <div className="ms-auto mt-auto smallest-font">
                        <span className="text-gray">P:</span><span className="ms-2">0.4%</span>
                    </div>
                </div>
                <div className="signalbox-bar d-flex">
                    <div>
                        <div className="bar all-center mb-1 smallest-font">
                            <span>02:30</span>
                        </div>
                        <div className="d-flex smallest-font">
                            <div className="circle all-center me-2"><div className="dot"></div></div>
                            <i className="fa-solid fa-signal text-primary"></i>
                        </div>
                    </div>
                    <div className="ms-3 medium-text">
                        <span>CPI Tokyo Excl Food & Ennergy M/M*</span>
                    </div>
                    <div className="ms-auto mt-auto smallest-font">
                        <span className="text-gray">P:</span><span className="ms-2">0.4%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
