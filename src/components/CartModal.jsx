import { forwardRef, useContext, useRef } from 'react'
import SubmitModal from './SubmitModal';
import Button from './Button';
import { CartContext } from '../Store/CartContext';
import { totalPrice } from './totalPrice';


const CartModal = forwardRef(({ }, ref) => {
    const { items, onPlus, onMinus } = useContext(CartContext)
    const submitModal = useRef()

    function handleClick() {
        if (items.length !== 0) {
            submitModal.current.showModal()
        } else {
            alert('Please select items and then proceed your order...')
        }
        ref.current.close()
    }

    return (
        <>
            <dialog ref={ref} className='rounded-lg backdrop:bg-black/70'>
                <div className='flex flex-col w-96 bg-modal py-6 px-3 font-raleway'>
                    {items.length === 0 ? <>
                        <h1 className='font-extrabold text-lg'>Your Cart</h1>
                        <p className='text-sm my-2'>No items Selected</p>
                    </> :
                        <>
                            <h1 className='font-extrabold text-lg'>Your Cart</h1>
                            <div className='grid gap-y-1 my-2'>
                                {items.map((item, index) => {
                                    return <div key={item.id} className='flex justify-between items-center text-sm'>
                                        <div>
                                            {item.name} - {item.count} x ${item.price}</div>
                                        <div className='flex items-center text-base'>
                                            <Button onClick={() => onMinus(item)}>-</Button>
                                            {item.count}
                                            <Button onClick={() => onPlus(item)}>+</Button>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </>
                    }


                    <div className='mx-2 text-right font-bold my-2'>
                        ${totalPrice(items)}
                    </div>

                    <form method='dialog' className='flex justify-end text-sm mx-2'>
                        <button className='px-2'>close</button>
                        <button type='button' onClick={handleClick} className='px-2 py-1 bg-yellow-500 rounded-md hover:bg-yellow-400'>Go to Checkout</button>
                    </form>
                </div>
            </dialog>
            <SubmitModal ref={submitModal} />
        </>
    )
})

export default CartModal;
