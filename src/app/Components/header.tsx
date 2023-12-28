'use client'

import LogoMobile from '../assets/mercado-libre-logo.png'
import Image from 'next/image'

import { Bars3Icon,ShoppingCartIcon,MagnifyingGlassIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {
    let [viewIcon,setViewIcon] = useState(true)

    return (
        <header className="bg-yellow-ml grid grid-cols-6 justify-center items-center p-3">
            <div className='col-span-1 mr-2'>
                <Image src={LogoMobile} alt="logoMl" className='object-cover'/>
            </div>
            <div className='flex col-span-3 justify-center items-center'>
                <div className='bg-white py-1 rounded-sm'>
                    <MagnifyingGlassIcon className='h-6 w-6'/>  
                </div>
                <div className=''>
                    <input type="text" placeholder='Estoy buscando...' className='p-1 w-full rounded-md'/>
                </div>
            </div>
            <div className='col-span-1 mx-4'>
               {viewIcon ? (
                 <Bars3Icon className="h-6 w-6 text-black-500" onClick={()=>setViewIcon(false)}/>
               ):(
                <XMarkIcon className="h-6 w-6 text-black-500"/>
               )}
            </div>
            <div className='col-span-1 mx-4'>
                <ShoppingCartIcon className='h-6 w-6 text-black' onClick={()=>setViewIcon(true)}/>
            </div>
        </header>
    )
}