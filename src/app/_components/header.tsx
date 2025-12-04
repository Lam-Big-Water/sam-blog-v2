import React from 'react'
import { Rss, Sun, Moon } from 'react-feather';
import HeaderLogo from './logo';

const Header = () => {
  return (
    <div className='flex justify-between items-center text-amber-50 font-medium'>
        <HeaderLogo />

        <div className='flex gap-6'>
            <Rss />
            <Sun />
        </div>
    </div>
  )
}

export default Header