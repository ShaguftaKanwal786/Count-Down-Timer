import React, { useState , useEffect} from "react"

const Countdowntimer :React.FC =()=>{

  const [time , setTime] = useState(0);
  const [isRunning , setIsRunning]= useState(false);
  const [remainingTime, setRemainingtime] = useState(0)


useEffect(()=>{
  let timer :NodeJS.Timeout;
  if(isRunning && remainingTime >0 ){
    timer =setInterval(()=>{
      setRemainingtime((prev) => prev-1)
    },1000)
  } else if(remainingTime === 0){
    setIsRunning(false)
  }
return()=> clearInterval(timer);

  
}, [isRunning , remainingTime])


const handleStart =()=>{
   if ( time>0){
    setRemainingtime(time)
    setIsRunning(true)
   }
}

const handlePause=()=>{
  setIsRunning(false)

}

const handleReset =()=>{
setIsRunning(false)
setRemainingtime(0)
setTime(0)
}

return (
  <div className="flex flex-col min-h-screen
 item-center justify-center text-center bg-gradient-to-br from-black to-gray text-gray-200 ">

  <h1 className="text-4xl font-extrabold  uppercase mb-6">CountDown Timer</h1>

<input type="number"
className=  "border-2 border-gray-400 ml-auto mr-auto bg-transparent p-3 mb-6 text-sky-400 text-xl"
placeholder="Enter Time In Second"
value ={time > 0 ? time : ""}
onChange = {(e: { target: { value: any; }; })=> setTime(Number(e.target.value))}
/>


<div className="text-4xl font-semibold uppercase mb-6
text-purple-950 ">

{remainingTime} seconds remaining
</div>



<div className="py-9">

  <button className=" text-white px-8 py-4
   rounded-lg font-normal bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"  onClick={handleStart}  > 
   Start

  </button>


<button className=" text-white px-8 py-4
   rounded-lg font-normal bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600" 
   
onClick={handlePause}>
   Pause
</button>

<button className=" text-white px-8 py-4
   rounded-lg font-normal bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600" 
   
onClick={handleReset} > 
   
   Reset
</button>

<div/>
<div/>


  </div>
</div>

)}
export default Countdowntimer;