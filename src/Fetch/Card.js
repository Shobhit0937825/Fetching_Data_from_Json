import React, {useState} from 'react'
import star from './star.png'
import About from './About'
import '../App.css'
import Box from './Box'
import { Link } from 'react-router-dom'

const Card = (props) => {
    console.log("props", props)
    const[data, setData] =useState(false) 

const callingFunction = () =>{
    setData(false)
}
    const open = () =>{
        
        setData(true)
    }
    
  return (

   <>
    {
      data ? <Box  callingFunc={callingFunction} dataview={props.data}></Box> : ""
    }
   
    
    
    <div className='main'>
        
        <div>
          <Link to="/Bigcard"><img src={props.data.v_model_image}/></Link>
        
       
        
        </div>
        <div className='lol'>
        <div>
    <h1 >{props.data.v_model_display_name}</h1>
    <div className='ww'>
    <img src={star} alt='starS'></img><img src={star} alt='starS'></img><img src={star} alt='starS'></img><img src={star} alt='starS'></img><img src={star} alt='starS'></img><span><a href="#" className='rr'>190ratings/ 15 answered questions</a></span>
    </div>
    <p><strong>{props.data.v_model_min_price}-{props.data.v_model_max_price}</strong><a href="#">View price breakup</a></p>
    <p className='tt'>*Ex-showroom Price in <a href="#" className='rr'>New Delhi</a></p>
    </div>
    <div > 
       <button className='your'  onClick={open}> View July Offers </button><button className='our'><strong>Contact Details</strong></button>
    </div>
    <div>
    <p className='tt'>Offer will expire in <strong>30days</strong></p>
    </div>
    </div>
    
    </div>
    {/* <div>
    <About/>
    </div> */}
    </>
    
  )
    
}

export default Card