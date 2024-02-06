"use client";
import { getUser, login } from '@/Redux/Auth/Action';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import WestIcon from '@mui/icons-material/West';
import { Button, TextField } from '@mui/material';
import * as yup from "yup";
import { useEffect } from 'react';


const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

const Login = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const goBack = () => {
        router.back();
    };
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onsubmit: (values) => {
            console.log('values', values)
            dispatchEvent(login(values));
        },
    });

    useEffect(() => {
        console.log("jwt -- ", jwt);
        if (jwt) {
            dispatch(getUser(jwt));
        }
    }, [jwt]);


    useEffect(() => {
        if (auth.user?.fullName || auth?.name) {
            if (auth.user.role === "DRIVER") {
                router.push("/driver/dashboard");
            } else {
                router.push("/book-ride")
            }
        }
    }, [auth.user]);

    return (
        <div className='py-10'>

            <div className="flex items-center px-2 lg:px-2 py-2">
                <WestIcon onClick={goBack} className='cursor-pointer' />
                <div className="w-full flex justify-center">
                    <img src="https://accounts.olacabs.com/en-in/images/ola-logo.png" alt="" />

                </div>

            </div>
            <form action="">
                <TextField
                    label="Email"
                    type='email'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    name='email'
                    value={formik.values.email}
                    onchange={formik.handleChange}
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    label="Password"
                    type='password'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    name='password'
                    value={formik.values.password}
                    onchange={formik.handleChange}
                    error={formik.touched.password && formik.errors.password}
                    helperText={formik.touched.password && formik.errors.password}
                />

                <Button
                    sx={{ padding: ".9rem 0rem" }}
                    variant='contained'
                    className='z-10 w-full'
                    type='submit'
                    color="secondary">Login</Button>
            </form>
            <div className="flex w-full justify-center">
                <p className="flex items-center mt-5 text-center">
                    Don't Have an Account? {" "}
                    <button
                        onClick={() => router.push("register")}
                        className='ml-5'
                        color='secondary'
                    >Register</button>
                </p>
            </div>
        </div>
    )
}

export default Login