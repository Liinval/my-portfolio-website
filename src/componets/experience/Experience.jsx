import React from 'react'
import { PiOfficeChairFill } from "react-icons/pi";
import { GiBriefcase } from "react-icons/gi";
   

export default function Experience() {


  return (
 <div className="relative overflow-hidden min-h-[900px] sm:min-h-[650px] flex flex-col items-center">
                
    
                
                <section id="home" className="flex flex-col pt-20  md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt32 md:pb-24 mt-24 md:mt-0">
                    <div className="flex-1 md:text-left mt-5 md:mt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
                            Welcome To My <span className='text-gray-900'>
                                                 Experience Page
                                          </span> 
                                          <PiOfficeChairFill className="text-pink-500 text-5xl mb-2" /> 
    
                        </h1>
                        <p className='max-w-3xl mt-4 text-white'>
                          Currently seeking a challenging industrial attachment to apply my academic foundation in software engineering to real-world business challenges. I am ready to bring my MERN stack expertise and Day One work ethic to a high-performing technical team.
                        </p>
            
                       </div>
    
                </section>
                
                <div className="md:h-[750px] h-[880px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute  bg-cyan-400 rounded-full -z-10 transform rotate-6 -top-60 ">
                    
    </div>

    <div>
      <div>
        <section>
                <div>
                  <div className="relative flex flex-col mt-2 items-center justify-center py-20 px-40 bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">

                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse">
                        
                        <div className="relative z-10 flex flex-col items-center bg-slate-900 p-4 rounded-3xl border border-slate-700">
                          
                           <div className='bg-slate-400 p-5 rounded-3xl '>
                                <GiBriefcase className="text-cyan-400 w-12 h-12  animate-bounce" />
                                <p className='text-cyan-400 z-10'>

                                  work Experience Coming Soon...

                                </p>
                           </div>
                            
                      </div>
                   </div>
                  </div>
                
                </div>
        </section>
      </div>

    </div>

    </div>
    
  )
};
  



