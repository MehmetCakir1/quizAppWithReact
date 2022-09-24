import { useAppContext } from "./context/AppContext"
import SetupForm from "./components/SetupForm"
import QuizCard from "./components/QuizCard"


const App = () => {
  const {waiting,loading,questions,index,correct}=useAppContext()

  if(waiting){
    return <SetupForm/>
  }
  if(loading){
    return (
    <h1 className="text-5xl font-bold absolute top-10 left-[50%] translate-x-[-50%]">LOADING...</h1>
  )
  }
  return (
    <QuizCard item={questions[index]}/>
  )
  
}

export default App