import { useEffect,useState } from 'react'
import { useParams, Link } from 'react-router-dom'
//COMPONENTS
import Header from '../components/Header'
import CardCountry from '../components/CardCountry'
//ESTILOS
import styles from '../styles/Country.module.css'

// _________________________________________________________________________________________


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
        <section className={ styles.Country }>
            <section className={ styles.Header }>
                <Header />
            </section>

            <section className={ styles.Button }>
                <Link to='/'>Back</Link>
            </section>

            <section className={ styles.Main }>    
                {
                    data.length > 0 &&
                        data.map(item => (
                            <CardCountry 
                                key={ item.name }
                                name={ item.name }
                                img={ item.flag }
                                nativeName={ item.nativeName }
                                population={ item.population }
                                subRegion={ item.subregion }
                                capital={ item.capital }
                                domain={ item.topLevelDomain }
                                currencies={ item.currencies[0].name }
                                languages={ item.languages }
                                borders={ item.borders }
                            />
                        ))
                }
            </section>

        </section>

    )
}

export default Country