import React from 'react';
import { TextInput } from '@tremor/react';
import { SearchIcon } from '@heroicons/react/solid';

const Navbar = () => {
    return (
        <header id='top' className='relative w-full sm:flex justify-between items-center p-2'>

            <h1 className='font-bold text-gray-200'>Dashboard</h1>
            
            <div className='py-2'>
                <TextInput icon={SearchIcon} placeholder='Search...'/>
            </div>

        </header>
    );
};

export default Navbar;