import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Answers from './Answers'


const Modal = () => {
  const {setIsModalOpen,correct,amount,setWaiting,setCorrect,correctAnswerList}=useAppContext()
  const [showAnswers,setShowAnswers]=useState(false)

const playAgain =()=>{
  setIsModalOpen(false)
  setWaiting(true)
  setCorrect(0)
}
  return (
    <div>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
      {
        correct ? (
          <div className='h-[15rem] w-full max-w-[40rem] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h2 className='text-black text-4xl font-bold py-2 md:py-4'>CONGRATULATIONS</h2>
          <p className='text-2xl font-semibold py-3'>You answered {correct} out of {amount} questions correctly</p>
          <button onClick={playAgain} className="md:mt-3 py-1 px-9 text-3xl font-bold bg-red-600 text-white opacity-75 hover:opacity-100">PLAY AGAIN</button>
          <div className='mt-2 underline font-bold text-lg cursor-pointer' onClick={()=>setShowAnswers(true)}>ANSWERS</div>

        </div>
        ):(
          <div className='h-[15rem] w-[90%] md:w-[40rem] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className='text-2xl font-semibold py-5 md:py-9'>Unfortunately you did not answer any of the questions correctly 😔</p>
          <button onClick={playAgain} className=" py-1 px-9 text-3xl font-bold bg-red-600 text-white opacity-75 hover:opacity-100">PLAY AGAIN</button>
          <div className='mt-2 underline font-bold text-lg cursor-pointer' onClick={()=>setShowAnswers(true)}>ANSWERS</div>
        </div>
        )
      }
      {
        showAnswers && <Answers setShowAnswers={setShowAnswers}/>
      }
    </div>
  )
}

export default Modal