"use client"
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Register from './Register'

const Page = () => {
    return (
        <div>
            <Layout children={<Register />}></Layout>
        </div>
    )
}

export default Page