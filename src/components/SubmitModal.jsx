import { useRef } from 'react'
import Button from './Button'
const SubmitModal = () => {
    const modal = useRef()

    return (
        <>
            <dialog ref={modal} className='rounded-lg backdrop:bg-black/70'>
                <form className='flex flex-col w-[28rem] bg-modal py-6 px-3 font-raleway'>
                    <h1 className='font-extrabold text-lg'>Your Cart</h1>
                    <div className='grid gap-y-2 text-sm py-2 font-bold'>
                        <div className='flex flex-col '>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id='fullName' className='w-1/2 rounded-sm h-6' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' className='w-1/2 rounded-sm h-6' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' className='w-1/2 rounded-sm h-6' />
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <label htmlFor="city">City</label>
                                <input type="text" id='city' className='w-11/12 rounded-sm h-6' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="postalCode">Postal Code</label>
                                <input type="number" id='postalCode' className='w-11/12 rounded-sm h-6' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-4 text-sm'>
                        <button className='px-2'>close</button>
                        <button type="submit" className='px-2 py-1 bg-yellow-500 rounded-md hover:bg-yellow-400'>Submit Order</button>
                    </div>
                </form>
            </dialog>
            <div><button type='button' onClick={() => modal.current.showModal()}>Open kro vai</button></div>
        </>
    )
}

export default SubmitModal
