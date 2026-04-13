import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

export default function Projects() {
  return (
<div className="relative overflow-hidden min-h-[900px] sm:min-h-[650px] flex flex-col items-center">
                
    
                
                <section id="home" className="flex flex-col pt-20  md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt32 md:pb-24 mt-24 md:mt-0">
                    <div className="flex-1 md:text-left mt-5 md:mt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
                            Welcome To My <span className='text-gray-900'>
                                                 Projects Page
                                          </span> 
                                          <FaLaptopCode className='text-purple-500 text-5xl mb-2' /> 
    
                        </h1>
                        <p className='max-w-3xl mt-4 text-white'>
                          Technical implementations leveraging React for dynamic frontends, Node.js for robust backends, and MongoDB for flexible data management. These projects represent my journey in building digital solutions that are both functional and future-proof.
                        </p>
    
                       
        
                       </div>
    
     
    
                </section>
                <div className="md:h-[750px] h-[880px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute  bg-cyan-400 rounded-full -z-10 transform rotate-6 -top-60 ">
                    
    </div>
    </div>
  
  )
}
