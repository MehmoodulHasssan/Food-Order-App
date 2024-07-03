import { forwardRef, useRef, useEffect, useContext, useState } from 'react'
import { CartContext } from '../Store/CartContext'
import SuccessModal from './SuccessModal'
import AlertModal from './AlertModal'
import usePost from './hooks/usePost'
import { totalPrice } from './totalPrice'


const SubmitModal = forwardRef(({ }, ref) => {
    const { items, onClear } = useContext(CartContext)
    const { postData, isError, setIsError, isSuccess, setIsSuccess, isLoading } = usePost()
    const successModal = useRef()
    const alertModal = useRef()


    function submission(e) {
        e.preventDefault();
        const fd = new FormData(e.target)
        const order = Object.fromEntries(fd.entries())
        const orderData = {
            customer: order,
            items: items,
            totalPrice: totalPrice(items)
        }
        postData('http://localhost:3000/orders', orderData)
    }

    if (isSuccess) {
        ref.current.close()
        successModal.current.showModal()
        onClear()
        setIsSuccess(false)
    }
    if (isError) {
        alertModal.current.showModal()
        setIsError(false)
    }

    return (
        <>
            <dialog ref={ref} className='rounded-lg backdrop:bg-black/70'>
                <form onSubmit={submission} className='flex flex-col w-[28rem] bg-modal py-6 px-3 font-raleway'>
                    <h1 className='font-extrabold text-lg'>Your Cart</h1>
                    <div className='grid gap-y-2 text-xs py-2 font-bold'>
                        <div className='flex flex-col '>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id='fullName' name='name' className='w-1/2 rounded-sm h-6' required />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' className='w-1/2 rounded-sm h-6' required />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' name='street' className='w-1/2 rounded-sm h-6' required />
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <label htmlFor="city">City</label>
                                <input type="text" id='city' name='city' className='w-11/12 rounded-sm h-6' required />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="postalCode">Postal Code</label>
                                <input type="number" id='postalCode' name='postal-code' className='w-11/12 rounded-sm h-6' maxLength={4} required />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-4 text-sm'>
                        <button type='button' onClick={() => ref.current.close()} className='px-2'>close</button>
                        <button type="submit" className='px-2 py-1 bg-yellow-500 rounded-md hover:bg-yellow-400'>Submit Order</button>
                    </div>
                </form>
            </dialog>
            <div><button type='button' >Open kro vai</button></div>

            {isLoading && <div className='flex items-center justify-center min-h-screen bg-customDark-100'>
                <div className="spinner w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            </div>}

            <AlertModal ref={alertModal} />
            <SuccessModal ref={successModal} />

        </>
    )
})

export default SubmitModal
