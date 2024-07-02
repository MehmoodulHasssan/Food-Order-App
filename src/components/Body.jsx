import { useEffect, useState } from 'react'

const Body = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const res = await fetch('http://localhost:3000/meals')
                const resData = await res.json()
                setData(resData)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    console.log(data)
    console.log(isLoading)


    return (
        <>

            {isLoading ? <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                <div class="spinner w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
                                <button className='text-xs px-2 py-1 text-black rounded-sm bg-yellow-500 hover:bg-yellow-600 hover:text-white'>Add to Cart</button>
                            </div>
                        </div>
                    })}

                </div>
            }
        </>
    )
}

export default Body
