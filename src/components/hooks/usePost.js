import {useState} from 'react'


const  usePost =() => {
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function postData(url, data){
        setIsError(false)
        setIsSuccess(false)
        setIsLoading(true)
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ order: data })
            })
            const resData = await res.json()
            setIsLoading(false)
            if(res.ok){
                setIsSuccess(true)
            }
            if (!res.ok) {
                setIsLoading(false)
                setIsError(true)
                throw new Error(resData.message)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return{
        isError,
        setIsError,
        isLoading,
        isSuccess,
        setIsSuccess,
        postData
    }
}

export default usePost;