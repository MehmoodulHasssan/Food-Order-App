import { useRef } from 'react'
import Button from './Button';

const Modal = () => {
    // const modal = useRef();
    // console.log(modal.current)
    // modal.current.showModal()
    return (
        <dialog className='rounded-lg backdrop:bg-black/70'>
            <div className='flex flex-col w-96 bg-modal py-6 px-3 font-raleway'>
                <h1 className='font-extrabold text-lg'>Your Cart</h1>
                <div className='grid gap-y-1 my-2'>
                    <div className='flex justify-between items-center text-sm'>
                        <div>Seafood Paella - 1 x $19.99</div>
                        <div className='flex items-center text-base'>
                            <Button>-</Button>
                            2
                            <Button>+</Button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center text-sm'>
                        <div>Seafood Paella - 1 x $19.99</div>
                        <div className='flex items-center text-base'>
                            <Button>-</Button>
                            2
                            <Button>+</Button>
                        </div>
                    </div>
                </div>
                <div className='mx-2 text-right font-bold my-2'>
                    $59.99
                </div>

                <form method='dialog' className='flex justify-end text-sm mx-2'>
                    <button className='px-2'>close</button>
                    <button className='px-2 py-1 bg-yellow-500 rounded-md hover:bg-yellow-400'>Go to Checkout</button>
                </form>
            </div>
        </dialog>
    )
}

export default Modal
