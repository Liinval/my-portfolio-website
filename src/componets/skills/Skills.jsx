import React from 'react'
import { GiSkills } from "react-icons/gi";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiGithub, SiJavascript,SiFirebase ,SiSupabase,SiRedis ,SiFastapi,SiNextdotjs ,SiVercel,SiAndroidstudio ,SiKubernetes} from "react-icons/si";
import { SiTypescript ,SiPython ,SiPytorch ,SiDjango  ,SiKotlin ,SiFlutter} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { GrDocker } from "react-icons/gr";
import { FaAws } from "react-icons/fa";

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
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
        { name: "Redis", icon: <SiRedis className="text-purple-600" /> },
        { name: "FastApi", icon: <SiFastapi className="text-teal-500" /> },
      ],
    },
    {
    title:"Programming Languages and Frameworks",
    skills:[
      { name: "React NAtive", icon: <FaReact className="text-blue-400" /> },
      { name: "Typescript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "Pytorch", icon: <SiPytorch className="text-orange-400" /> },
      { name: "Django", icon: <SiDjango className="text-emerald-900" /> },
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },

    ],
  },
  {
    title:"Tools",
    skills:[
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Docker", icon: <GrDocker className="text-sky-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Microsoft Office", icon: <TiVendorMicrosoft className="text-orange-600" /> },
      { name: "AWS", icon: < FaAws  className="text-amber-400" /> },
      { name: "Vercel", icon: < SiVercel  className="text-white" /> },
      { name: "Git & Github", icon: <  SiGithub  className="text-slate-400" /> },

    ],
  }
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
        <section className="max-w-3xl mx-auto py-20 px-6 mt-20 bg-white dark:bg-slate-950 rounded-xl border shadow-sm">
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

