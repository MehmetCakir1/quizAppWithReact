import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import axios from "axios"


const endpoint="https://opentdb.com/api.php?"

const categoryList = {
    "general knowledge":9,
    "books":10,
    "mythology":20,
    "sports":21,
    "geograpyhy":22,
    "history":23,
}

export const AppContext=createContext()

export const useAppContext=()=>{
    return useContext(AppContext)
}

const AppContextProvider = ({children}) => {
    const [waiting,setWaiting]=useState(true)
    const [loading,setLoading]=useState(false)
    const [questions,setQuestions]=useState([])
    const [index,setIndex]=useState(0)
    const [correct,setCorrect]=useState(0)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [amount,setAmount]=useState(5)
    const [category,setCategory]=useState("history")
    const [difficulty,setDifficulty]=useState("medium")
    const [correctAnswerList]=useState([])

    const url=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${categoryList[category]}&type=multiple`


    const getQuestions=async (url)=>{
        setLoading(true)
        setWaiting(false)
        try{
            const response=await axios.get(url)
            if(response){
                const data=response.data.results
                if (data.length > 0) {
                    setQuestions(data)
                    setLoading(false)
                    setWaiting(false)
                  } else {
                    setWaiting(true)
                  }
            }else{
                setWaiting(true)
            }
                
        }
        catch(err){
            console.log(err.message);
        }
        finally{
            setLoading(false)
        }
    }
    const nextQuestion=()=>{
        if(index==amount-1){
            setIsModalOpen(true)
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }

    const checkAnswer=(value)=>{
        if(value){
            setCorrect(correct+1)
        }
        nextQuestion()
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        getQuestions(url)
    }
    questions.map((item)=>correctAnswerList.push(item.correct_answer))
    // console.log(correctAnswerList)
  return (
    <AppContext.Provider value={{waiting,setWaiting,loading,questions,index,correct,setCorrect,isModalOpen,setIsModalOpen,nextQuestion,checkAnswer,amount,setAmount,category,setCategory,difficulty,setDifficulty,handleSubmit,correctAnswerList}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider