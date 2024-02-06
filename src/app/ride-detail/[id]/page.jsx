"use client";
import Layout from '@/app/components/user/Layout/Layout';
import React, { useEffect } from 'react';
import RideDetail from './RideDetail';

const Page = (props) => {
    useEffect(() => {
        console.log("Props-", props);
    }, [props]);

    return (
       <Layout children={<RideDetail />} />
    );
};

export default Page;
