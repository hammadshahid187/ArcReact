import React from 'react'
import commentImg from "../../../img/user.svg"
import "./Comment.css"

export const Comments = () => {
  return (
    <div>
      <h3 className='f-22 fw-bold text-secondary border-bottom pb-3'>Comments</h3>
      <div className='comment-box d-flex mt-4'>
        <div>
          <div className='comment-img all-center'>
            <img src={commentImg} alt='' />
          </div>
        </div>
        <div className='ms-3'>
          <h5 className='mb-3 fw-bold pt-2'>Johnny Arcafeed</h5>
          <div>
            <span className='tag-primary'>AAPL</span>
            <span className='tag-danger ms-2'>Bearish</span>
          </div>
          <p className='f-16 mt-3 text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra donec interdum morbi curabitur. At proin dignissim lectus tempor risus nisi dictumst aliquet. Pellentesque massa, in nunc viverra accumsan sem. Sagittis, ut sapien, eleifend platea senectus consectetur.
          </p>

          <div className="ps-0 d-flex likeBox my-auto f-17 justify-content-end">
            <div className=' my-auto'>
              <i className="fa-regular fa-thumbs-up me-2"></i>224
            </div>
            <div className="mx-2 my-auto">
              <i className="fa-regular fa-thumbs-up me-2"></i>224
            </div>
            <div className='ms-4'>
              <button className='btn-secondary f-15 px-3 py-2 rounded-3'>Reply</button>
            </div>
          </div>
        </div>
      </div>
      <div className='comment-box d-flex mt-4 ms-90 border-left'>
        <div className='ps-3'>
          <div className='comment-img all-center'>
            <img src={commentImg} alt='' />
          </div>
        </div>
        <div className='ms-3'>
          <h5 className='mb-3 fw-bold pt-2'>Johnny Arcafeed</h5>
          <div>
            <span className='tag-primary'>AAPL</span>
            <span className='tag-primary ms-2'>MSFT</span>
            <span className='tag-danger ms-2'>Bearish</span>
          </div>
          <p className='f-16 mt-3 text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra donec interdum morbi curabitur. At proin dignissim lectus tempor risus nisi dictumst aliquet. Pellentesque massa, in nunc viverra accumsan sem. Sagittis, ut sapien, eleifend platea senectus consectetur.
          </p>

          <div className="ps-0 d-flex likeBox my-auto f-17 justify-content-end">
            <div className=' my-auto'>
              <i className="fa-regular fa-thumbs-up me-2"></i>224
            </div>
            <div className="mx-2 my-auto">
              <i className="fa-regular fa-thumbs-up me-2"></i>224
            </div>
            <div className='ms-4'>
              <button className='btn-secondary f-15 px-3 py-2 rounded-3'>Reply</button>
            </div>
          </div>
        </div>
      </div>
      <div className='comment-box d-flex mt-4'>
        <div>
          <div className='comment-img all-center'>
            <img src={commentImg} alt='' />
          </div>
        </div>
        <div className='ms-3'>
          <h5 className='mb-3 fw-bold pt-2'>Johnny Arcafeed</h5>
          <div>
            <span className='tag-primary'>AAPL</span>
            <span className='tag-danger ms-2'>Bearish</span>
          </div>
          <p className='f-16 mt-3 text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra donec interdum morbi curabitur. At proin dignissim lectus tempor risus nisi dictumst aliquet. Pellentesque massa, in nunc viverra accumsan sem. Sagittis, ut sapien, eleifend platea senectus consectetur.
          </p>

          <div className="ps-0 d-flex likeBox my-auto f-17 justify-content-end">
            <div className='my-auto'>
              <i className="fa-regular fa-thumbs-up me-2"></i>224
            </div>
            <div className="mx-2 my-auto">
              <i className="fa-regular fa-thumbs-up me-2"></i>224
            </div>
            <div className='ms-4'>
              <button className='btn-secondary f-15 px-3 py-2 rounded-3'>Reply</button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mb-5 mt-3'>
          <a href='/' className='text-sky'>View All Comments (10)</a>
      </div>
      <div className='comment-input pt-5'>
        <h3 className='f-22 fw-bold text-secondary border-bottom pb-3 mb-4'>Add My Comment</h3>
        <span className='text-gray'>Choose a ticker</span>
        <div className='mt-2'>
          <span className='tag-secondary'>AAPL</span>
          <span className='tag-secondary ms-2'>MSFT</span>
        </div>
        <textarea type='text' className='mt-4'></textarea>
        <button className='btn btn-primary fs-15 px-3 py-2 mt-3 float-end'>Post Comment</button>
      </div>
    </div>
  )
}
