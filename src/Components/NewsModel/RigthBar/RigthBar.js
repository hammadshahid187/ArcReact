import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Bar } from "react-chartjs-2"
import smileImg from '../../../img/Smiling.svg'
import tradeImg from '../../../img/a.svg'
import bookIcon from '../../../img/BookIcon.svg'
import eventIcon from '../../../img/Event.svg'
import articleIcon from '../../../img/Article.svg'

export const RigthBar = () => {
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
    <>
    <div className='overflow-auto h-100 p-2'>
      <div className='bg-white box-shadow p-3 rounded-3'>
        <h5 className='f-18 border-bottom pb-3'><img src={bookIcon} alt='' className='me-2' />Quick Bytes</h5>
        <p className='f-15 text-secondary mt-3'>Samsung's next Unpacked event is reported to take place on August 11 at 10 AM ET</p>
        <p className='f-15 mb-0 text-secondary'>Five devices are expected to be launched at the event: Galaxy Z Fold 3, Galaxy Z Flip 3, Galaxy Watch 4, Galaxy Watch 4 Active, and Galaxy Buds 2. The new Galaxy Watches will not use the Tizen OS, marking a shift for Samsung; instead, they'll use a revamped Wear OS, developed in collaboration with Google.</p>
      </div>
      <div className='bg-white box-shadow p-3 rounded-3 mt-4 trade-card w-100 m-0'>
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
      <div className='bg-white box-shadow p-3 rounded-3 mt-4'>
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
      <div className='bg-white box-shadow p-3 rounded-3 mt-4 mb-180'>
        <h5 className='f-18 border-bottom pb-3'><img src={articleIcon} alt='' className='me-2' />Article Soundness Score</h5>
        <h4 className='f-26 text-center mt-3'>83 <span className='f-14 my-auto text-gray'>(1-100)</span></h4>
        <p className='f-15 text-secondary mt-3 mb-0'>The article draws some reasonable conclusions based on the reported leaks, such as the devices to be expected at the event and the features these devices might have. It also speculates about what these features could mean for the devices, which is sound analysis.</p>
      </div>
    </div>
    </>
  )
}
