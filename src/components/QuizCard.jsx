import React from 'react'
import { useAppContext } from '../context/AppContext';
import Modal from "../components/Modal"

const QuizCard = ({item}) => {
  const {question,incorrect_answers,correct_answer}=item;
  const {correct,index,nextQuestion,checkAnswer,isModalOpen}=useAppContext()
  // console.log(item)
  const answers=[...incorrect_answers,correct_answer]
  answers.sort()
  // console.log(answers);

  return (
    <div className='text-center max-w-[90%] m-auto mt-24'>
       {isModalOpen && <Modal/>}
      <p className='text-end font-semibold text-xl'>Correct Answers:{correct}/{index}</p>
      <h2 dangerouslySetInnerHTML={{__html:question}} className="text-3xl font-bold py-3"/>
      <div className='text-2xl flex flex-col justify-center items-center sm:mt-6'>
      {answers.map((item,index)=>{
          return(
            <button key={index}
            onClick={()=>checkAnswer(correct_answer===item)}
            dangerouslySetInnerHTML={{__html:item}}
            className="block w-[70%] max-w-[35rem] my-2 p-1 rounded-lg bg-blue-500 font-semibold hover:opacity-60"
            />
          ) 
        })}
      </div> 
      <button onClick={nextQuestion} className="bg-emerald-400 font-bold py-2 px-12 mt-6 hover:bg-red-400">Next Question</button>
    </div>
  )
}

export default QuizCard