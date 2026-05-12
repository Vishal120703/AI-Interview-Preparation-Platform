import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "motion/react"
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../config/api';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';
function Navbar() {
    const {userData} = useSelector((state)=>state.user)
    const [showCreditPopup,setShowCreditPopup] = useState(false)
    const [showUserPopup,setShowUserPopup] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAuth, setShowAuth] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
            dispatch(setUserData(null))
            setShowCreditPopup(false)
            setShowUserPopup(false)
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='bg-transparent flex justify-center px-4 pt-6 relative z-40'>
        <motion.div 
        initial={{opacity:0 , y:-40}}
        animate={{opacity:1 , y:0}}
        transition={{duration: 0.3}}
        className='w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-[24px] shadow-lg border border-indigo-100 px-6 md:px-8 py-4 flex justify-between items-center relative z-40'>
            <div className='flex items-center gap-3 cursor-pointer'>
                <div className='bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-white p-2 rounded-xl shadow-md'>
                    <BsRobot size={18}/>

                </div>
                <h1 className='font-semibold hidden md:block text-lg tracking-tight bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-600 bg-clip-text text-transparent'>InterviewIQ.AI</h1>
            </div>

            <div className='flex items-center gap-6  relative'>
                <div className='relative'>
                    <button onClick={()=>{
                        if(!userData){
                            setShowAuth(true)
                            return;
                        }
                        setShowCreditPopup(!showCreditPopup);
                        setShowUserPopup(false)
                    }} className='flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-md hover:bg-indigo-100 transition-colors border border-indigo-200'>
                        <BsCoin size={20}/>
                        {userData?.credits || 0}
                    </button>

                    {showCreditPopup && (
                        <div className='absolute right-0 mt-3 w-64 bg-white text-gray-800 shadow-2xl border border-indigo-100 rounded-xl p-5 z-[90]'>
                            <p className='text-sm text-gray-600 mb-4'>Need more credits to continue interviews?</p>
                            <button type='button' onClick={()=>{
                                setShowCreditPopup(false)
                                navigate("/pricing")
                            }} className='w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 text-white font-semibold py-2 rounded-lg text-sm hover:opacity-90 transition-opacity cursor-pointer'>Buy more credits</button>

                        </div>
                    )}
                </div>

                <div className='relative'>
                    <button
                    onClick={()=>{
                         if(!userData){
                            setShowAuth(true)
                            return;
                        }
                        setShowUserPopup(!showUserPopup);
                        setShowCreditPopup(false)
                    }} className='w-9 h-9 bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-white rounded-full flex items-center justify-center font-semibold shadow-sm hover:opacity-90 transition-opacity'>
                        {userData ? userData?.name.slice(0,1).toUpperCase() : <FaUserAstronaut size={16}/>}
                        
                    </button>

                    {showUserPopup && (
                        <div className='absolute right-0 mt-3 w-48 bg-white shadow-xl border border-indigo-100 rounded-xl p-4 z-[90]'>
                            <p className='text-md text-indigo-600 font-medium mb-1'>{userData?.name}</p>

                            <button onClick={()=>navigate("/history")} className='w-full text-left text-sm py-2 hover:text-black text-gray-600'>InterView History</button>
                            <button onClick={handleLogout} 
                            className='w-full text-left text-sm py-2 flex items-center gap-2 text-rose-400'>
                                <HiOutlineLogout size={16}/>
                                Logout</button>
                        </div>
                    )}
                </div>

            </div>



        </motion.div>

        {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
      
    </div>
  )
}

export default Navbar
