import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
export default function Footer() {
  return (
    <div className='mt-8'>
        <footer className='bg-cyan-400 px-4 md:px-16 lg:px-28 mt-8 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-3xl font-bold text-white '>About Me</h2>
                    <p className='text-lg text-white max-w-2xl leading-relaxed mt-4'>
                        I specialize in scalable web and mobile solutions .With a bachlor's Degree in Software Engineering from Midlands State University and a passion for AI , Blockchain and Embedded Systems . I bridge the gap between complex logic and seamless user experiences 
                        
                    </p>
                </div>


                <div>
                    <h2 className='text-3xl font-bold text-white'>Quick Links</h2>
                    <ul className='text-white'>
                        <li>
                            
                            <a href="/" className='hover:underline text-gray-900 text-white text-lg'>Home</a>
                            
                        </li>

                        <li>
                            <a href=" /skills" className='hover:underline text-gray-900 text-white text-lg'>Skills</a>
                            
                        </li>

                        <li>
                            <a href="/experience" className='hover:underline text-gray-900 text-white text-lg'>Experience</a>
                            
                        </li>

                        <li>
                            <a href="/projects" className='hover:underline text-gray-900 text-white text-lg'>Projects</a>
                           
                        </li>

                        <li>
                             <a href="/certifications" className='hover:underline text-gray-900 text-white text-lg'>Certifications</a>
                        </li>
                        
                     </ul>
                </div>


                <div>
                  <h2 className='text-white text-3xl font-bold'>My Contact Info</h2> 
                  <ul className='flex space-x-4 mt-4'>

                    <li>
                        <FaLinkedin className=' text-2xl'/>
                        <a href="https://www.linkedin.com/in/linvalchipangura" target="_blank" rel="noopener noreferrer " className='text-white text-lg'>
                        Connect on LinkedIn
                        </a>
                         
                    </li>

                    <li>
                        <FaSquareWhatsapp className=' text-2xl' />
                        <a href=" https://wa.me/qr/PL46HAGSZGQ5P1" className='text-white text-lg'>WhatsApp </a>
                        
                    </li>

                    <li>
                        <IoCall className=' text-2xl'/>
                        <a href="tel:+263778846248" className='text-white text-lg'> Call </a>
                          
                    </li>

                    <li>
                         <MdEmail className=' text-2xl' />
                        <a href="mailto:linvalchipangura@gmail.com" className='text-white text-lg'>Email</a>
                        
                    </li>
   
                  </ul>
                 
                </div>
            </div>
            <div className='border border-t p-4'>

            </div>
            <p classname="text-center">
                @2026 Developed And Maintained By Linval Chipangura. All Rights Reserved
            </p>
        </footer>
      
    </div>
  )
}
