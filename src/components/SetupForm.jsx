import React from 'react'
import { useAppContext } from '../context/AppContext'

const SetupForm = () => {
  const {setAmount,setCategory,setDifficulty,handleSubmit}=useAppContext()


  return (
    <>
      <div className='w-full max-w-[25rem] text-center font-bold m-auto border border-1 border-black py-5 mt-24  bg-white relative z-10'>
      <h2 className='text-5xl text-green-900 py-3'>SET UP QUIZ</h2>
      <div className=' m-auto text-2xl'>
        <label htmlFor="amount" className=' block w-full py-2 text-cyan-700 '>Number Of Questions</label>
        <select name="amount" id="amount" onChange={(e)=>setAmount(e.target.value)} className=' block w-full max-w-[20rem] p-2 m-auto border border-1 border-black text-xl'>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className=' m-auto text-2xl'>
        <label htmlFor="category" className=' block w-full py-2 text-cyan-700 '>Category</label>
        <select name="category" id="category" onChange={(e)=>setCategory(e.target.value)} className='capitalize block w-full max-w-[20rem] p-2 m-auto border border-1 border-black text-xl'>
          <option value="general knowledge">general knowledge</option>
          <option value="books">books</option>
          <option value="mythology">mythology</option>
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="geograpyhy">geograpyhy</option>
        </select>
      </div>
      <div className=' m-auto text-2xl'>
        <label htmlFor="difficulty" className=' block w-full py-2 text-cyan-700 '>Difficulty</label>
        <select name="difficulty" id="difficulty" onChange={(e)=>setDifficulty(e.target.value)} className='capitalize block w-full max-w-[20rem] p-2 m-auto border border-1 border-black text-xl'>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
      <button className='bg-red-400 py-2 px-16 sm:px-28 rounded-lg mt-4 text-3xl' onClick={handleSubmit}>START</button>
    </div>
    <img src="images/trivia.webp" alt="trivia"  className='absolute left-0 top-0 w-full h-full object-cover opacity-90'/>
    </>
  
  )
}

export default SetupForm