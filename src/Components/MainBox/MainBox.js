import React from 'react'
import { LeftBox } from './LeftBox'
import { RigthBox } from './RigthBox'
import { CenterBox } from './CenterBox'

export const MainBox = () => {
  return (

    <section id="main-body">
      <div class="container-fluid">
        <div class="row m-0 position-relative">
          <LeftBox />
          <CenterBox/>
          <RigthBox />
        </div>
      </div>
    </section>
  )
}
