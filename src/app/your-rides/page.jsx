"use client";
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Ride from './Ride'

const page = () => {
  return (
    <Layout children={<Ride />} />
  )
}

export default page