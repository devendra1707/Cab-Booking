"use client";
import React, { useEffect } from 'react';
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import RideCard from '../components/user/RideCard/RideCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WifiIcon from '@mui/icons-material/Wifi';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '@/Redux/Auth/Action';

const Profile = () => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(state => state);


    useEffect(() => {
        dispatch(getUser(jwt))
    }, []);
    console.log("auth ", auth)
    const handleLogout = () => {
        dispatch(logout())
        router.push("/book-ride")
    }

    const router = useRouter();
    const goBack = () => {
        router.back()
    };

    return (
        <div className='px-2 lg:px-5'>
            <div className="px-2 lg:px-5 py-2">
                <WestIcon onClick={goBack} className='cursor-pointer' />
            </div>

            <div className="flex flex-col items-center space-y-2">
                <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    className='cursor-pointer'
                    onClick={() => router.push("/profile")}

                >
                    R
                    {/* {auth.user?.fullName[0]} */}
                </Avatar>
                <p>Ram
                    {/* {auth.user?.fullName} */}
                </p>
                <p>9988999
                    {/* {auth.user?.mobile} */}
                </p>
            </div>

            <div className="border rounded-sm mt-5">
                <RideCard />

                <div className='flex flex-col items-center'>
                    {/* <Button onClick={() => router.push("/your-rides")} className='text'>See All RIdes</Button> */}
                    <Button onClick={() => router.push("/your-rides")} className='text'>
                        See All Rides
                    </Button>
                </div>

            </div>
            <div className="border mt-5">
                <div className="flex items-center p-3 border-b">
                    <AccountBalanceWalletIcon className='text-green-600' />
                    <p className="ml-4">
                        Ola Money
                    </p>
                </div>
                <div className="flex items-center p-3 border-b">
                    <ContactPhoneIcon />
                    <p className="ml-4">
                        Emergency Contact
                    </p>
                </div>
                <div className="flex items-center p-3 border-b">
                    <WifiIcon />
                    <p className="ml-4">
                        Ola Wi-Fi Creddentials
                    </p>
                </div>
            </div>

            <div>
                <Button className='w-full bg-red-500 text-white' variant='contained' color='error'
                    onClick={handleLogout}
                >Logout</Button>
            </div>
        </div>
    )
}

export default Profile