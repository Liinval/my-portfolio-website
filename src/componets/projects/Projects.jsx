import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FiTrendingUp, FiLock, FiDollarSign, FiSmile, FiExternalLink } from 'react-icons/fi';



export default function Projects() {

  const projects = [
  {
    title: "AI Business Predictive Dashboard",
    description: "A full-stack predictive analytics platform powered by machine learning to forecast sales, business trends, and data-driven performance metrics.",
    tags: ["React", "Brain.js", "Node.js", "Tailwind CSS"],
    liveLink: "https://ai-business-predictive-dashboard.vercel.app/",
    icon: <FiTrendingUp className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Digital Will Vault",
    description: "A secure digital safe designed to safely store, encrypt, and manage sensitive personal documents, legal assets, and media with conditional next-of-kin access.",
    tags: ["React", "Tailwind CSS", "Node.js", "Security"],
    liveLink: "https://digital-will-vault.vercel.app/",
    icon: <FiLock className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "GrowVest",
    description: "An investment platform where investors invest in farms and farm produce and also act as a market place linking farmers and market ",
    tags: ["React", "Tailwind CSS", "MongoDB", "Express"],
    liveLink: "https://growvest-lemon.vercel.app/",
    icon: <FiDollarSign className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Dynamic Joke API Hub",
    description: "A responsive, asynchronous web application leveraging REST APIs to fetch, filter, and deliver a seamless daily dose of dynamic humor.",
    tags: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    liveLink: "https://api-jokes-tau.vercel.app/",
    icon: <FiSmile className="w-6 h-6 text-indigo-400" />,
  },
];
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

    <div>

       <section className="bg-slate-900 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-lg">
            A curated selection of full-stack applications, AI integrations, and digital solutions I've built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-slate-600 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.1)]"
            >
              <div>
                {/* Icon & Title Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/60 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="mt-3 text-slate-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Footer section */}
              <div className="mt-6">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  Launch Live App 
                  <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
             
    </div>
    </div>
  
  )
}
