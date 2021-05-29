import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
    const [ data, setData ] = useState([])
    let { id } = useParams()
    id = id.replace(':', '')

    const getData = async() => {
        const data = await fetch(`https://restcountries.eu/rest/v2/name/${ id }`)
        const responde = await data.json()
        setData(responde)
        console.log(responde)
    }

    useEffect(() => {
        getData()
    },[])

    return(
        <h2>{ id }</h2>
    )
}

export default Country