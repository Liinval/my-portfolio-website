import React , { useState } from 'react'
import {Link} from "react-router-dom"

export default function Navbar(){ 
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleModal = () => {setIsOpen(!isOpen);}

    const NavbarLinks =[
        {id:1 , name:'Home' ,link:'/'},
        {id:2 , name:'Skills' ,link:'/Skills'},
        {id:3 , name:'Experience' ,link:'/Experience'},
        {id:4 , name:'Projects' ,link:'/Projects'},
        {id:5 , name:'Certifications' ,link:'/Certifications'},
    
    ]

    
  return (
    <div>
    <header className='absolute top-0 flex justify-center items-center body-font z-10 top-0 w-full z-50'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center '>
            <a className='flex title-font font-medium text-gray-400 mb-4 md:mb-0'>
                <span className='ml-3 mr-11 font-bold text-white text-3xl'>My Portfolio Website</span>
            </a>
            <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-white justify-center'>
               {
                NavbarLinks.map((e)=>(
                    <a key={e.id} href={e.link} className='mr-7 hover:text-gray-600'>
                        {e.name}

                    </a>
                ))
               }

            </nav>
            

    
            <button   onClick={toggleModal} type='button' className='text-white mt-4 bg-gray-600 hover:bg-gray-400 font-semibold rounded-full text-sm px-5 py-2.5 text-center'>
                Contact

            </button>
            {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center relative">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            
            <div className="space-y-4">
              
              <a 
                href="https://wa.me/263778846248" 
                target="_blank" 
                className="flex items-center justify-center gap-2 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                <span>WhatsApp</span>
              </a>

        
              <a 
                href="tel:+263778846248" 
                className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
              >
                <span>Call Me</span>
              </a>
            </div>

            
            <button 
              onClick={toggleModal}
              className="mt-6 text-sm text-gray-500 underline hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}


        </div>
    </header>
    </div>
  )
}

