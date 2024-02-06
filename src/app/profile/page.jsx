"use client";
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Profile from './Profile'


const page = () => {
    return (
        <Layout children={<Profile />} />

    )
}

export default page