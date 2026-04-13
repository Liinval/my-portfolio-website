import React from 'react'
import { GiSkills } from "react-icons/gi";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Skills() {

  
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "HTML5/CSS3", icon: <FaHtml5 className="text-orange-500" /> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
  ];
  return (
    <div className="relative overflow-hidden min-h-[900px] sm:min-h-[650px] flex flex-col items-center">
                
    
                
                <section id="home" className="flex flex-col pt-20  md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt32 md:pb-24 mt-24 md:mt-0">
                    <div className="flex-1 md:text-left mt-5 md:mt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
                            Welcome To My <span className='text-gray-900'>
                                                 Skills Page

                                          </span>

                            <GiSkills className='text-gray-500 text-5xl mb-2'/>
                        </h1>
                        <p className='max-w-3xl mt-4 text-white'>
                             
                          From pixel-perfect React interfaces to robust Node.js backends and low-level embedded logic—here is how I turn ideas into functional reality.In an ever-evolving tech landscape, my greatest skill is the ability to learn and adapt. Every day is an opportunity to master a new framework or optimize a low-level system.Committed to staying at the forefront of innovation, I dedicate time daily to exploring new tools in the Fintech and Embedded Systems space to build smarter solutions.

                        </p>
    
                       
        
                       </div>
    
     
    
                </section>
                <div className="md:h-[750px] h-[880px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute  bg-cyan-400 rounded-full -z-10 transform rotate-6 -top-60 ">
                    
    </div>
        


    <div>

      <div>
        <section className="max-w-3xl mx-auto py-10 px-6 bg-white dark:bg-slate-950 rounded-xl border shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">Technical Skills</h2>
      
      {skillCategories.map((category, index) => (
        <div key={index}>
          <div className="py-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Horizontal Line - only show if not the last item */}
          {index !== skillCategories.length - 1 && (
            <hr className="border-slate-200 dark:border-slate-800" />
          )}
        </div>
      ))}
    </section>
      </div>
    </div>
    </div>




  )
}

