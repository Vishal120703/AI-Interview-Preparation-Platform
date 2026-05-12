import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';


function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate()
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50/50 to-sky-50 flex flex-col relative overflow-hidden'>
      <div className='pointer-events-none absolute -top-36 -left-24 w-96 h-96 rounded-full bg-indigo-300/30 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-sky-300/30 blur-3xl' />
      <div className='pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-violet-300/20 blur-3xl' />
      <Navbar />

      <div className='flex-1 px-4 md:px-6 py-12 md:py-16 relative z-0'>
        <div className='max-w-6xl mx-auto'>

          <div className='flex justify-center mb-5'>
            <div className='bg-white text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2 border border-indigo-100 shadow-sm backdrop-blur-sm'>
              <HiSparkles size={16} className="text-indigo-500" />
              AI Powered Smart Interview Platform
            </div>


          </div>
          <div className='text-center mb-24 md:mb-28 bg-white/80 border border-white rounded-[2rem] px-5 md:px-10 py-10 md:py-14 shadow-xl shadow-indigo-100/70 backdrop-blur-sm'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto tracking-tight text-slate-900'>
              Practice Interviews with
              <span className='relative inline-block'>
                <span className='bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 text-white px-5 py-1 rounded-full shadow-md'>
                  AI Intelligence

                </span>
              </span>



            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className='text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg'>
              Role-based mock interviews with smart follow-ups,
              adaptive difficulty and real-time performance evaluation.

            </motion.p>

            <div className='flex flex-wrap justify-center gap-4 mt-10'>
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true)
                    return;
                  }
                  navigate("/interview")
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className='bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 text-white font-semibold px-10 py-3 rounded-full hover:opacity-90 transition shadow-lg hover:shadow-xl'>
                Start Interview

              </motion.button>

              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true)
                    return;
                  }
                  navigate("/history")
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className='bg-white text-slate-800 border border-indigo-100 px-10 py-3 rounded-full hover:bg-indigo-50 transition shadow-sm hover:shadow-md backdrop-blur-sm'>
                View History

              </motion.button>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-24 md:mb-28'>
            {
              [
                {
                  icon: <BsRobot size={24} />,
                  step: "STEP 1",
                  title: "Role & Experience Selection",
                  desc: "AI adjusts difficulty based on selected job role."
                },
                {
                  icon: <BsMic size={24} />,
                  step: "STEP 2",
                  title: "Smart Voice Interview",
                  desc: "Dynamic follow-up questions based on your answers."
                },
                {
                  icon: <BsClock size={24} />,
                  step: "STEP 3",
                  title: "Timer Based Simulation",
                  desc: "Real interview pressure with time tracking."
                }
              ].map((item, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + index * 0.2 }}
                  whileHover={{ rotate: 0, scale: 1.06 }}

                  className={`
        relative bg-white rounded-3xl border-2 border-indigo-100
        hover:border-indigo-300 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl 
        transition-all duration-300
        ${index === 0 ? "rotate-[-4deg]" : ""}
        ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
        ${index === 2 ? "rotate-[-3deg]" : ""}
      `}>

                  <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'>
                    {item.icon}</div>
                  <div className='pt-10 text-center'>
                    <div className='text-xs text-indigo-600 font-semibold mb-2 tracking-wider'>{item.step}</div>
                    <h3 className='font-semibold mb-3 text-lg text-slate-900'>{item.title}</h3>
                    <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
                  </div>


                </motion.div>
              ))
            }
          </div>


          <div className='mb-24 md:mb-28 bg-white/80 rounded-[2rem] border border-white px-4 md:px-8 py-10 shadow-xl shadow-indigo-100/70 backdrop-blur-sm'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16 text-slate-900'>
              Advanced AI{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Capabilities</span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-8 md:gap-10'>
              {
                [
                  {
                    image: evalImg,
                    icon: <BsBarChart size={20} />,
                    title: "AI Answer Evaluation",
                    desc: "Scores communication, technical accuracy and confidence."
                  },
                  {
                    image: resumeImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Resume Based Interview",
                    desc: "Project-specific questions based on uploaded resume."
                  },
                  {
                    image: pdfImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Downloadable PDF Report",
                    desc: "Detailed strengths, weaknesses and improvement insights."
                  },
                  {
                    image: analyticsImg,
                    icon: <BsBarChart size={20} />,
                    title: "History & Analytics",
                    desc: "Track progress with performance graphs and topic analysis."
                  }
                ].map((item, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='bg-white border border-indigo-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                      <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64' />
                      </div>

                      <div className='w-full md:w-1/2'>
                        <div className='bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                          {item.icon}
                        </div>
                        <h3 className='font-semibold mb-3 text-xl text-slate-900'>{item.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
                      </div>

                    </div>


                  </motion.div>
                ))
              }
            </div>


          </div>

          <div className='mb-24 md:mb-28 bg-white/80 rounded-[2rem] border border-white px-4 md:px-8 py-10 shadow-xl shadow-indigo-100/70 backdrop-blur-sm'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16 text-slate-900'>
              Multiple Interview{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Modes</span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-8 md:gap-10'>
              {
                [
                  {
                    img: hrImg,
                    title: "HR Interview Mode",
                    desc: "Behavioral and communication based evaluation."
                  },
                  {
                    img: techImg,
                    title: "Technical Mode",
                    desc: "Deep technical questioning based on selected role."
                  },

                  {
                    img: confidenceImg,
                    title: "Confidence Detection",
                    desc: "Basic tone and voice analysis insights."
                  },
                  {
                    img: creditImg,
                    title: "Credits System",
                    desc: "Unlock premium interview sessions easily."
                  }
                ].map((mode, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-indigo-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                    <div className='flex items-center justify-between gap-6'>
                      <div className="w-1/2">
                        <h3 className="font-semibold text-xl mb-3 text-slate-900">
                          {mode.title}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed">
                          {mode.desc}
                        </p>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="w-1/2 flex justify-end">
                        <img
                          src={mode.img}
                          alt={mode.title}
                          className="w-28 h-28 object-contain"
                        />
                      </div>



                    </div>


                  </motion.div>
                ))
              }
            </div>


          </div>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

        <Footer/>

    </div>
  )
}

export default Home
