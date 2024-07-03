import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../Store/CartContext'
import useFetch from './hooks/useFetch'

const CartBody = () => {
    const { addItem } = useContext(CartContext)
    const { isLoading, isError, data } = useFetch('http://localhost:3000/meals')

    // const [data, setData] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    // const [isError, setIsError] = useState(false)

    // useEffect(() => {
    //     async function fetchData() {
    //         setIsLoading(true)
    //         try {
    //             const res = await fetch('http://localhost:3000/meals')
    //             const resData = await res.json()
    //             setData(resData)
    //             setIsLoading(false)

    //             if (!res.ok) {
    //                 throw new Error('Failed to catch items')
    //                 setIsError(false)
    //             }
    //         }
    //         catch (error) {
    //             setIsLoading(false)
    //             setIsError(true)
    //             return;
    //         }
    //     }
    //     fetchData()
    // }, [])
    // console.log(data)
    // console.log(isLoading)
    // console.log(isError)


    return (
        <>
            {isError ? <div className='mt-40 font-bold text-2xl text-center text-yellow-500'>Failed To Fetch Items, try again...</div> :
                isLoading ? <div className='flex items-center justify-center min-h-screen bg-customDark-100'>
                    <div className="spinner w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                    :
                    <div className='grid mt-40 w-7/12 mx-auto grid-cols-3 gap-3'>
                        {data && data.map((item, index) => {
                            return <div key={item.id} className='flex flex-col ring-1 h-[28rem] bg-cart rounded-lg'>
                                <img className='rounded-t-lg' src={`../../backend/public/${item.image}`} alt="item-img" />
                                <div className='grid grid-cols-1 px-3 py-2 gap-2 justify-items-center'>
                                    <h1 className='font-raleway font-bold text-lg '>{item.name}</h1>
                                    <div className='text-sm font-bold w-12 bg-customDark text-center'>{`$${item.price}`}</div>
                                    <p className='text-xs font-raleway text-center'>{item.description}</p>
                                    <button onClick={() => addItem(item)} className='text-xs px-2 py-1 text-black rounded-sm bg-yellow-500 hover:bg-yellow-600 hover:text-white'>Add to Cart</button>
                                </div>
                            </div>
                        })}

                    </div>
            }
        </>
    )
}

export default CartBody
