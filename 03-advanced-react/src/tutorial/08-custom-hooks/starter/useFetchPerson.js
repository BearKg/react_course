import { useEffect } from "react"
import { useState } from "react"

const useFetchPerson = (url) => {
     const [isLoading, setIsLoading] = useState(true)
     const [isError, setIsError] = useState(false)
     const [user, setUser] = useState(null)

     useEffect(()=> {
        const fetchPerson= async () => {
            try {
                const resp = await fetch(url)
                if(!resp.ok) {
                    setIsError(true)
                    setIsLoading(false)
                    return
                }
                const data = await resp.json()
                setUser(data)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }
        fetchPerson()
     }, [])
     return {isError, isLoading, user}
}

export default useFetchPerson