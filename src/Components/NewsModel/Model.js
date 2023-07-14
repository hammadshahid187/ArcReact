import React, { useState } from 'react'
import { LeftBar } from './LeftBar/LeftBar'
import { RigthBar } from './RigthBar/RigthBar'
import { ModelFooter } from './ModelFooter'
import MenuBtn from '../../img/menubtn.svg'

export const Model = () => {
  const [menu,setMenu]=useState("0");
  return (
    <>
      <div className='row m-0 modelBox'>
        {/*<div className={`rigthBarBtn ${menu==1?"rigthBaropen":""}`} onClick={()=>setMenu("1")} >
          <img src={MenuBtn} alt='' />
  </div>*/}
        <div className='col-lg-8 col-12'>
          <LeftBar />
        </div>
        <div className={`col-lg-4 col-12 modelRigth ${menu==1?"open":""}`}>
          <div className={`rigthBarBtn d-lg-none`} onClick={()=>setMenu("1")} >
            <img src={MenuBtn} alt='' />
          </div>
          <RigthBar />
        </div>
      </div>
      <ModelFooter/>
    </>
  )
}
