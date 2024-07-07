import React, { useContext } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom';


import Cart from './Cart'
import { GlobalContext } from '../context/GlobalContext'



const NavBar = () => {
    const navigate= useNavigate();
   
    const {user}= useContext(GlobalContext)
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>

        <header className='relative bg-white'>

            <MaxWidthWrapper>

                <div className='border-b border-gray-200'>

                    <div className='flex h-16 items-center'>
                        {/*nav logo*/}
                        <div className='ml-4 flex flex-rowlg:ml-0'>
                            <Icons.logo className='h-10 w-10'/>
                            <div className='items-center justify-center align-baseline mt-1 ml-2 text-2xl font-bold text-pretty text-current'> Digital <span className='text-blue-700'> World</span></div>
                        </div>

                        {/* nav items*/}

                        <div className='hidden z-50 lg:block lg:ml-8 lg:self-center'>
                            <NavItems/>

                        </div>
                        <div className='ml-auto flex items-center justify-end'>
                        {user ? null : ( <Button variant='ghost'onClick={() => navigate('/SignIn')}>Sign In </Button>)}
                        {user ? null : (  <span className='h-5 w-px bg-gray-300'/>)}
                        {user ? null : (    <Button variant='ghost' onClick={() => navigate('/SignUp')}>Create Accout </Button>)}
                        {user ? null : (    <span className='h-5 w-px bg-gray-300'/>)}
                        <div className='ml-4 flow-root'> 
                        <Cart/>
                        </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default NavBar