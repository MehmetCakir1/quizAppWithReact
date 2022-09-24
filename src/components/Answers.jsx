import React from 'react'
import { useAppContext } from '../context/AppContext'
import {FaTimes} from "react-icons/fa"

const Answers = ({setShowAnswers}) => {
    const {correctAnswerList}=useAppContext()
    console.log(correctAnswerList)
  return (
    <div className='bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-full max-w-[40rem] h-full max-h-[40rem]'>
        <div className='flex justify-center items-center relative'>
        <h1 className='font-bold text-3xl py-3 text-teal-800'>CORRECT ANSWERS</h1>
        <button className='absolute top-3 right-4 text-4xl text-red-600' onClick={()=>setShowAnswers(false)}><FaTimes/></button>
        </div>
        {
            correctAnswerList.map((item,index)=>{
                return(
                    <h2 key={index} className="font-bold text-start px-3 text-xl">{index+1}. {item}</h2>
                )
            })
        }
    </div>
  )
}

export default Answers