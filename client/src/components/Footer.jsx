import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-transparent flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-[24px] shadow-lg border border-indigo-100 py-8 px-4 text-center'>
        <div className='flex justify-center items-center gap-3 mb-3'>
            <div className='bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-white p-2 rounded-xl shadow-md'><BsRobot size={16}/></div>
            <h2 className='font-semibold bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-600 bg-clip-text text-transparent'>InterviewIQ.AI</h2>
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto'>
  AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>


      </div>
    </div>
  )
}

export default Footer
