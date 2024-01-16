import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

function Banner() {
  return (
    <>

   <div className="banner position-relative">
   <video src="4.mp4" autoPlay loop muted width="100%" height="750" className='position-relative'>

</video>
   <div className=" text-center text-white position-absolute  start-0 w-100 " style={{top:"25%"}}>
    <img src='logo192.png' alt='logo' width={120} className='logorotate'/>
       <h1>CNC WEB WORLD</h1>
       <h2>Remove Your Fresher Tag</h2>
       <Button variant="primary" className='me-3'>Learn React</Button>
       <Button variant="warning">Learn Java</Button>

   </div>
   </div>
    </>
  )
}

export default Banner
