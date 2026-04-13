
import Navbar from "../navbar/Navbar";
import React,{useState,useEffect} from "react";
import linvalProfile from"../../assets/linval profile.png";
import linvalResume from"../../assets/linvalResume.pdf";
import {HiOutlineCodeBracketSquare} from "react-icons/hi2"; 
import { VscVscodeInsiders } from "react-icons/vsc";         
import { GiBrain } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si"; 
import { SiCashapp } from "react-icons/si";  
import { IoHardwareChipSharp } from "react-icons/io5";

 
const roles =["Full-Stack Developer","AI Developer","DevOps Engineer"]


 export default function Hero(){
    
    
        const [index , setIndex] = useState(0);
        useEffect(()=>{
            const interval = setInterval(()=>{
                setIndex((prevIndex)=>(prevIndex +1) %roles.length);
            },3000)
            return()=> clearInterval(interval);
        },[])

        
        
 return(
        <div className="relative overflow-hidden min-h-[900px] sm:min-h-[650px] flex flex-col items-center">
            

            
            <section id="home" className="flex flex-col pt-20  md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt32 md:pb-24 mt-24 md:mt-0">
                <div className="flex-1 md:text-left mt-5 md:mt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Linval T Chipangura

                    </h1>

                    <p className="text-lg text-white max-w-2xl leading-relaxed mt-4">
                        Software Engineer and 
                        <span className="text-gray-900 font-bold mx-2 transition-all duration-500">
                            {roles[index]}
                            </span>
                            
                            specializing in scalable web and mobile solutions .With a bachlor's Degree in Software Engineering from Midlands State University and a passion for AI , Blockchain and Embedded Systems . I bridge the gap between complex logic and seamless user experiences 
                        
                    </p>
                    <button  type='button' className='text-white  bg-gray-600 hover:bg-gray-400 font-semibold rounded-full text-sm px-5 py-2.5 text-center'>
                              
                             <a href={linvalResume} download='linvalResume'>Download CV</a>
         
                             </button>
                             
    
    </div>

 <div className="flex-1 flex justify-center md:justify-end mt-0 md:mt-0">
    <img src={linvalProfile} alt="my image" className="h-[250px] sm:h-[300px] md:h-[440px] w-[250px] sm:w-[360px]  rounded-sm" />

 </div>

            </section>
            <div className="md:h-[750px] h-[880px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute  bg-cyan-400 rounded-full -z-10 transform rotate-6 -top-60 ">
                
</div>






            <div >
                <section>
                 <div className="mt-8">
                 <div className="px-4">
                    <HiOutlineCodeBracketSquare className="text-cyan-500 text-5xl mb-2" />
                    <h1 className="text-gray-900 text-6xl font-bold mx-2">
                        Full-Stack Developer
                    </h1>
                    <span className="block text-gray-600 text-2xl mt-2 max-w-2xl px-4 leading-relaxed"> 
                        Passionate about building end-to-end web applications that solve real-world problems. With expertise in the MERN stack, I specialize in creating seamless user interfaces in React coupled with robust, scalable backend architectures using Node.js and MongoDB. My approach focuses on writing clean, maintainable code and delivering high-performance digital solutions that bridge the gap between complex logic and intuitive user experiences.
                    </span>
                  </div>
                 </div>




                 <div>
                 <div className="mt-8 px-4">
                    <VscVscodeInsiders className="text-blue-600 text-5xl mb-2" />
                
                    <h1 className="text-gray-900 text-6xl font-bold mx-2">
                        DevOps Engineer
                    </h1>
                    <span className="block text-gray-600 text-2xl px-4 mt-2 max-w-md leading-relaxed">
                          Dedicated to streamlining the software development lifecycle through automation and efficient infrastructure management. I focus on implementing CI/CD pipelines, containerization, and cloud orchestration to ensure rapid, reliable deployments. By bridging the gap between development and operations, I aim to enhance system stability and scalability, allowing teams to deliver high-quality software at the speed of modern business
                    </span>
                  </div>
                 </div>



                 <div>
                 <div className="mt-8 mb-4 px-4">
                    <GiBrain className="text-gray-500 text-5xl mb-2" />
                    <h1 className="text-gray-900  text-6xl font-bold mx-2">
                        Ai Developer
                    </h1>
                    <span className="block text-gray-600 text-2xl mt-2 px-4 max-w-md leading-relaxed">
                        Exploring the frontier of machine learning and predictive analytics to drive data-driven decision-making. I am particularly interested in applying Artificial Intelligence to sectors like mining, fintech, and agriculture to unlock new levels of efficiency. From building intelligent chatbots to developing predictive models for investment platforms, I strive to create smart systems that transform raw data into actionable insights for the future
                    </span>
                  </div>
                 </div>


                 <div>
                 <div className="mt-8 mb-4 px-4">
                    <IoHardwareChipSharp className="text-pink-500 text-5xl mb-2" />
                   <h1 className="text-gray-900  text-6xl font-bold mx-2">
                        Embedded Systems
                    </h1>
                    <span className="block text-gray-600 text-2xl mt-2 px-4 max-w-md leading-relaxed">
                        Passionate about Edge AI, deploying intelligent models directly onto microcontrollers for offline, real-time processing.Optimizing firmware for power-efficient systems, ensuring long-term reliability for remote industrial applications.
                    </span>
                  </div>
                 </div>



                 <div>
                 <div className="mt-8 mb-4 px-4">
                    <SiHiveBlockchain className="text-yellow-500 text-5xl mb-2"/>
                   <h1 className="text-gray-900  text-6xl font-bold mx-2">
                        Blockchain Fanatic
                    </h1>
                    <span className="block text-gray-600 text-2xl mt-2 px-4 max-w-md leading-relaxed">
                        Advocating for blockchain-as-a-service to eliminate middlemen and reduce transaction friction in emerging markets.Committed to the decentralization of data, empowering users with full ownership and security of their digital identity
                    </span>
                  </div>
                 </div>


                 <div>
                 <div className="mt-8 mb-4 px-4">

                    <SiCashapp className="text-purple-500 text-5xl mb-2" />
                    <h1 className="text-gray-900  text-6xl font-bold mx-2">
                        FinTech Fanatic
                    </h1>
                    <span className="block text-gray-600 text-2xl mt-2 px-4 max-w-md leading-relaxed">
                        Dedicated to building resilient financial ecosystems that bridge the gap between traditional banking and the unbanked.Passionate about digitalizing informal finance, creating transparent and accessible credit-rotating systems for local communities
                    </span>
                  </div>
                 </div>




                  
                    
                </section>
            </div>

            

        </div>
  

    
 )
}