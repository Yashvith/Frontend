
import { ChevronDown, Link } from 'lucide-react'

import { GlobalContext } from "../context/GlobalContext";
import { useContext } from 'react';
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

const NavItem = ({ isAnyOpen, category, onOpen, isOpen }) => {
    
    
    
return (
<div className='flex '>
<div className='relative flex items-center'>
<Button className="gap-1.5" onClick={onOpen} variant={isOpen ? "secondary" : "ghost"}>
    {category.label}
    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
        "-rotate-180": isOpen
    })} />
</Button>
</div>

{isOpen ? (
<div className={cn("absolute inset-x-0 top-full text-lg ", { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen })}>
    <div  aria-hidden="true" />
   <div className=' bg-white'>
    <div className='mx-auto max-w-7xl px-8'>
    <div className='grid grid-cols-4  gap-x-8 gap-y-10 py-16 '>
            <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8 '>
                {category.featured.map((item)=>(
                    <div key={item.name} className=' relative text-base sm:text-sm'>
                            <div className='relative aspect-video overflow-hidden rounded-lg  group-hover:opacity-75 hover:bg-slate-50'>
                            <img
                            src={item.imageSrc}
                            alt='Product Category Image'
                            
                            className='object-contain w-full h-full object-center'
                            />
                            </div>

                            <Button variant='ghost' className='mt-6 ml-12 block font-medium text-gray-900'>
                                {item.name}
                            </Button>
                            <Button variant='link' className='mt-1 ml-16' aria-hidden  >Notify Me</Button>
                    </div>  
                ))}
            </div>
        </div>
    </div>
    </div>      
</div>
) : null}
</div>
)
}

export default NavItem


// add Prop