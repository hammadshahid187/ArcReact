import React from 'react'
import ModeImg from "../../../img/modes.svg"
import ArticleImg from '../../../img/samsung.webp'
import "./ArticleDetail.css"

export const ArticleDetail = () => {
  return (
    <div className='articleDetail pb-5'>
        <h2 className='mb-0'>Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</h2>
        <div className='my-3 d-flex'>
            <div className='tages'>
                <span className='tag-primary'>AAPL</span>
                <span className='tag-primary'>MSFT</span>
            </div>
            <div>
            <span className='me-2 text-primary'>Sentiment:</span><img src={ModeImg}/>
            </div>
        </div>
        <span className='text-gray'>Published July 5, 2021 - 8:16 pm EST</span>
        <a href='/' className='d-block mt-3 nav-link p-0'>Via Bloomberg</a>
        <h5 className='mt-5'>Samsung's next Unpacked event reportedly lands August 11</h5>
        <img src={ArticleImg} className='my-4 articleImg w-100' alt=''/>
        <p>Samsung had a pretty quiet Mobile World Congress event, but it did tell us we’d learn more about its upcoming Google-approved smartwatch at its next Unpacked event. Unfortunately, the company didn’t tell us when exactly that would be, but a new report from Korean publication DigitalDaily News (via 9to5Google) claims the next Unpacked will take place on August 11, at 10 AM ET.</p>
        <span>According to the report, Samsung will be launching five devices at the event:</span>
        <p>Notably, the new Galaxy Watches will be Samsung’s first to not use Tizen OS. Google collaborated with Samsung to revamp Wear OS from the ground up, making it smoother and more efficient.</p>
        <p>Hopefully, the devices are able to maintain the long battery life Samsung’s smartwatches have been known for, while having much greater compatibility with smartwatch apps via Wear OS. That said, the watch will use a custom One UI Watch skin — because it wouldn’t be Samsung if it didn’t put its own twist on the software.</p>
        <p>As for the Z Fold 3, it’s expected to be a refinement of the original Fold’s concept without major changes to the form factor. The biggest change aside from the expected spec bump is that the Z Fold 3 will support the S-Pen.</p>
        <p>The event will reportedly be broadcast via YouTube, as per usual, and there is no indication the company plans to hold a concurrent physical event. With the rumored date a little over a month away, I’d expect an official announcement from Samsung within the next week or two.</p>
        <div className='text-center mb-5'>
          <a href='/' className='text-sky'>Back to top</a>
        </div>
    </div>
  )
}
