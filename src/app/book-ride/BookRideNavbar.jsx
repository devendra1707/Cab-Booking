"use client";
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/Redux/Auth/Action';
import { useRouter } from 'next/navigation';



const BookRideNavbar = () => {

    const [sidebarOpen, setSidebar] = useState(false)

    const handleSidebarClose = () => setSidebar(false)

    const handleSidebarOpen = () => setSidebar(true)

    const router=useRouter();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(state => state);


    useEffect(() => {
        dispatch(getUser(jwt))
    }, []);

    return (
        <Box>
            <AppBar sx={{ backgroundColor: '#120E43' }} className="" position="">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    // onClick={handleSidebarOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }} >
                        Zosh Cab
                    </Typography>


                    {

                        // {auth.user?.fullName
                        true ? (
                            <Avatar
                                className='cursor-pointor'
                                // onClick={() => router.push("/profile")}
                                sx={{ bgcolor: deepOrange[500] }}>
                                A
                                {/* {auth.user?.fullName[0]} */}
                            </Avatar>

                        ) : (

                            <Button
                                onClick={() => router.push("login")}
                                color="inherit">
                                Login
                            </Button>
                        )}


                </Toolbar>

            </AppBar>
            {/* <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
                {DrawerList("left")}
            </Drawer>  */}
        </Box>
    )
}

export default BookRideNavbar