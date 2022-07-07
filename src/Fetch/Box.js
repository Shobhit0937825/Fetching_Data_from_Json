import React, { useState} from 'react'

function Page(props) {
// const[item, setItem ]=useState(false)


const click = () =>{
    // setItem(item)
    // console.log('click')

props.callingFunc(); }

  return (
    <>
   
    <div className='blurpart'>
    <div className='innerBox'>
    <div className='alt'>
        <button className='cv' onClick={click} > x </button>
   
        <h2>{props.dataview.v_model_display_name}</h2>
        <div>
        <input type="text" placeholder='Name' className='innn'></input><br></br>
        <input type="text" placeholder='Mobile Number' className='ioo'></input>
        </div>
        <div>
            <button className='bu'> View July Offers</button>
    </div>
    <div>
        <p className='col'>Your details are safe with us.</p>
        <p className='col'>* By proceeding ahead you agree to</p>
<p className='col'>Terms of Cookie use & Privacy Policy</p>
    </div>
    </div>
    </div>
    </div></>
  )
}

export default Page;