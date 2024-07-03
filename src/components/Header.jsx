import { useContext, useRef } from 'react'
import CartModal from './CartModal'
import logo from '../assets/logo.jpg'
import { CartContext } from '../Store/CartContext'

const Header = () => {
    const { items } = useContext(CartContext)
    const modal = useRef()
    return (
        <>
            <div className='w-full h-32 bg-customDark fixed top-0'>
                <div className="flex fixed z-10 top-0 left-1/2 transform -translate-x-1/2 justify-between w-9/12 py-10 items-center ">
                    <div className='flex items-center'>
                        <img className=' h-12 w-12 rounded-full border-solid ring-2 ring-yellow-500 mr-3' src={logo} alt="Logoimg" />
                        <h1 className=' font-bold text-yellow-500 text-3xl'>REACTFOOD</h1>
                    </div>
                    <div>
                        <button onClick={() => modal.current.showModal()} className='text-yellow-500 text-xl font-sans hover:text-yellow-300'>{`${items.length !== 0 ? `(${items.length})` : ''}Cart`}</button>
                    </div>
                </div>

            </div>
            <CartModal ref={modal} />
        </>

    )
}

export default Header
