import React from 'react'
import { Link } from 'react-router-dom'

function BigCard() {
  return (
    <>
    <div className='wholePara'>
        <div >
        <img src='https://images.91wheels.com//assets/b_images/main/models/profile/profile1649851152.jpg?width=360'/>
        </div>
        <div >
        <h2>Mahindra eKUV100</h2>
        <p className='price'>(Expected Price)</p>
        <h2>₹ 10.00 Lakh*</h2>
        < p className='launchPara'>Expected Launch Date: September 2022</p>
       
        <button className='verifyBut'> <strong>Notify When Launched</strong></button>
        
        </div>
    </div>
    </>
  )
}

export default BigCard