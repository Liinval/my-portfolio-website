
import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { GrHpi } from "react-icons/gr";
import ciscoLogo from './cisco.png'
import ibmLogo from './IBM.png'

export default function Certifications() {
  const skillCategories = [
      {
        title: "Technical Certifications",
        skills: [
          { name: "HPlife Data Science & Analytics ", icon: GrHpi },
          { name: "HPlife Cybersecurity", icon: GrHpi  },
          { name: "IBM Systems Solutions Architect solutions", icon: ibmLogo  },
          { name: "IBM AI Developer", icon: ibmLogo },
          { name: "Cisco Networking Academy Cybersecurity", icon:ciscoLogo },
         
        ],
      }
      ];
    
  return (
    <div className="relative overflow-hidden min-h-[900px] sm:min-h-[650px] flex flex-col items-center">
                
    
                
                <section id="home" className="flex flex-col pt-20  md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt32 md:pb-24 mt-24 md:mt-0">
                    <div className="flex-1 md:text-left mt-5 md:mt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
                            Welcome To My <span className='text-gray-900'>
                                                 Certifications Page
                                          </span>  
                                          <GrCertificate className='text-yellow-500 text-5xl mb-2'/>
    
                        </h1>
                        <p className='max-w-3xl mt-4 text-white'>
                          Professional credentials from institutions like IBM certificates and HP Life. These certifications complement my hands-on project experience, ensuring every solution I build is backed by industry-standard logic and modern AI principles.
                        </p>
    
                       
        
                       </div>
    
     
    
                </section>
                <div className="md:h-[750px] h-[880px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute  bg-cyan-400 rounded-full -z-10 transform rotate-6 -top-60 ">



    </div>
    
    <div>

      <div>
        <section className="max-w-3xl mx-auto py-20 px-6 mt-20 bg-white dark:bg-slate-800 rounded-xl border shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">My Certifications</h2>
      
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

                    {typeof skill.icon === 'string' ? (<img 
                                                          src={skill.icon} 
                                                          alt={skill.name}
                                                           className="w-8 h-8 object-contain"/>):(<skill.icon className="text-blue-600 w-8 h-8 object-contain"/>)}
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
