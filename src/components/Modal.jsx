import React from 'react'
import { useAppContext } from '../context/AppContext'


const Modal = () => {
  const {setIsModalOpen,correct,amount,setWaiting,setCorrect}=useAppContext()

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
          <h2 className='text-black text-4xl font-bold py-4'>CONGRATULATIONS</h2>
          <p className='text-2xl font-semibold py-3'>You answered {correct} out of {amount} questions correctly</p>
          <button onClick={playAgain} className="mt-7 py-1 px-9 text-3xl font-bold bg-red-600 text-white opacity-75 hover:opacity-100">PLAY AGAIN</button>
        </div>
        ):(
          <div className='h-[15rem] w-[90%] md:w-[40rem] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className='text-2xl font-semibold py-9'>Unfortunately you did not answer any of the questions correctly 😔</p>
          <button onClick={playAgain} className="mt-7 py-1 px-9 text-3xl font-bold bg-red-600 text-white opacity-75 hover:opacity-100">PLAY AGAIN</button>
        </div>
        )
      }
      <button>ANSWERS</button>  
    </div>
  )
}

export default Modal