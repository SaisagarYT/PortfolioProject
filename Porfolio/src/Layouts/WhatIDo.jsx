import React from 'react'
import SkillBox from '../components/SkillBox'

const WhatIDo = () => {
  return (
    <div className='container4'>
      <div className="topbox4">
        <h4 style={{color:"#dac5a7"}}>SERVICES</h4>
        <h1>What I Do?</h1>
        <div className="line2">

        </div>
      </div>
      <div className="skillboxcontainer">
        <SkillBox/>
        <SkillBox/>
        <SkillBox/>
        <SkillBox/>
        <SkillBox/>
      </div>
    </div>
  )
}

export default WhatIDo
