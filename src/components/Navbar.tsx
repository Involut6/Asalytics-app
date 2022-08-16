import { FC } from 'react';
import logo from '../assets/logo.png'

const Navbar: FC = (): any => {
    return (
        <div className='flex justify-between py-4'>
            <div className='flex items-end'>
                <img src={logo} className='pb-[6px]' alt='' />
                <p className='text-3xl font-bold'>SAlytics</p>
            </div>
            <p className='text-sm p-4 bg-black rounded h-fit font-[400] text-white'>ANALYZE ASAs</p>
        </div>
    )
}

export default Navbar;