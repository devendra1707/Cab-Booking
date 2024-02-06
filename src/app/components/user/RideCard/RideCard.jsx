"use client";
import { Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const RideCard = () => {
    return (
        <div
            // onClick={()=>router.push(`/ride-detail/${ride.id}`)}
            className='flex justify-between items-center rounded-s-sm p-3 cursor-pointer'>

            <div className="flex items-center">
                <img className='w-20 h-20' src='https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_640.png' alt="" />
                <div className="ml-5 space-y-1">
                    <p className="text-sm font-semibold">
                        Today 10:08 PM
                    </p>
                    <p className="text-sm font-semibold opacity-60">Cab KSLW993</p>
                    <p className="opacity60 text-xs">Mumbai Hokuldgam Market</p>
                    <p className="opacity-60 text-xs">
                        {/* {ride.destinationArea} */}
                        {"delhi"}
                    </p>
                </div>

            </div>

            {/* {ride.status === "COMPLETED" ?  */}
            {true ? (
                <div>
                    <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem" />
                </div>

            ) : (
                <div className="flex flex-col justify-between pl-5">
                    <p className="text-green-500 mb-5">
                        Scedule...
                    </p>
                    <Avatar
                        alt='Remy Shap'
                        src='https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_640.png' />
                </div>
            )}

        </div>
    )
}

export default RideCard