import { useEffect, useState } from 'react'

 
export const useIntersectionObserver = ( element ) => {
    const [ show, setShow ] = useState(false)
    // const element = useRef(null)
    
    useEffect( () => {
        
        //console.log(element.current)
        const observer = new window.IntersectionObserver( (entries) => {
            //console.log(entries)
            const { isIntersecting } = entries[0]
            //console.log(isIntersecting);
            if(isIntersecting) {
                // console.log('si')
                setShow(true)
                observer.disconnect()
            }
        } )
        observer.observe(element.current)
        
    }, [element])

    return { show }
} 