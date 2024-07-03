import { useState, useEffect } from "react"


const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(url)
                const resData = await res.json()
                setData(resData)
                setIsLoading(false)
                setIsError(false)
                
                    if (!res.ok) {
                        setIsError(true)
                        throw new Error('Failed to catch items')
                    }
                
            } catch (error) {
                console.log(error)
            }    
        }
        fetchData()
    }, [url])
    return {
        data,
        isLoading,
        isError
    }
}

export default useFetch
