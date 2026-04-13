import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(){ 
    const NavbarLinks =[
        {id:1 , name:'Home' ,link:'/'},
        {id:2 , name:'Skills' ,link:'/skills'},
        {id:3 , name:'Experience' ,link:'/experience'},
        {id:4 , name:'Projects' ,link:'/projects'},
        {id:5 , name:'Certifications' ,link:'/certifications'},
    
    ]
    
  return (
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
            <button type='button' className='text-white mt-4 bg-gray-600 hover:bg-gray-400 font-semibold rounded-full text-sm px-5 py-2.5 text-center'>
                Contact

            </button>

        </div>
    </header>
  )
}
