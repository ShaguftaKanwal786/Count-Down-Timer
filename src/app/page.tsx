"use client"


import React from 'react'
import { link } from 'fs';
import Link from 'next/link';
import Countdowntimer from '@/components/Countdowntimer';


const Home:React.FC =()=>{
  return(
    <div>
      
        <Countdowntimer/>
    
 </div>
  )
}
export default Home;
<Link rel ="stylesheet" href="style.css"/>
