"use client";
import React from 'react'

const CardVideoSection=()=> {
  return (
    <div className='mt-32'>
      <h1 className='text-5xl font-bold my-10 text-center'>India's most ambiting car.</h1>
      <div className=''>
        <video autoPlay loop controls style={{ width: '100%', height: '100%' }} src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/banner-video-mob.mp4"></video> </div>

    </div>
  )
}

export default CardVideoSection