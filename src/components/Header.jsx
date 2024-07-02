import React from 'react'
import logo from '../assets/logo.jpg'
//transform -translate-x-1/2
const Header = () => {
    return (
        <div className='w-full h-32 bg-customDark fixed top-0'>
            <div className="flex fixed z-10 top-0 left-1/2 transform -translate-x-1/2 justify-between w-9/12 py-10 items-center ">
                <div className='flex items-center'>
                    <img className=' h-12 w-12 rounded-full border-solid ring-2 ring-yellow-500 mr-3' src={logo} alt="Logoimg" />
                    <h1 className=' font-bold text-yellow-500 text-3xl'>REACTFOOD</h1>
                </div>
                <div>
                    <button className='text-yellow-500 text-xl hover:text-yellow-300'>Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Header
