
import Navbar from "../navbar/Navbar";
import React,{useState,useEffect} from "react";
import linvalProfile from"../../assets/linval profile.png";
import linvalResume from"../../assets/linvalResume.pdf";
    
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

                 <div className=" h-auto w-full mt-200">
                    
                </div>   
                   
                </section>
            </div>


        </div>
  

    )
 }