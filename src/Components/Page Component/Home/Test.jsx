import React from 'react'
import {threeimg } from '../../Resources/Images/HomeImage'


function Test() {
  return (
   <div>
    {
        threeimg.map((val,i)=>{
            return <div key={i}>
                <img src={threeimg[i].name}/>
                <div>{you[i].name}</div>
            </div>
        })
    }
   </div>
  )
}

export default Test