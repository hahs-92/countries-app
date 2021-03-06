import { useEffect,useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
//COMPONENTS
import Header from '../components/Header'
import CardCountry from '../components/CardCountry'
import IconLeftArrow from '../components/IconLeftArrow'
//ESTILOS
import styles from '../styles/Country.module.css'
//CONTEXT
import AppContext from '../context/AppContext'

// _________________________________________________________________________________________


const Country = () => {
    const { darkMode } = useContext(AppContext)
    const [ data, setData ] = useState([])
    let { id } = useParams()
    id = id.replace(':', '')
    let history = useHistory()

    const getData = async() => {
        try {     
            const data = await fetch(`https://restcountries.eu/rest/v2/name/${ id }`)
            const responde = await data.json()
            setData(responde)
        } catch (error) {
            console.error(error)
        }
    }

    const handleBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line 
    },[id])

    return(
        <section className={ darkMode ? `${ styles.Country } ${ styles.Country__darkMode}`: styles.Country  }>
            <section className={ darkMode ? `${ styles.Header } ${ styles.Header__darkMode}`: styles.Header  }>
                <Header />
            </section>

            <section className={  styles.Button }>
                <div className={ darkMode ? `${ styles.Button__container } ${ styles.Button__container__darkMode}`: styles.Button__container } onClick={ handleBack }>
                    {
                        darkMode
                            ?
                            <>
                                <IconLeftArrow width='16' fill='hsl(0, 0%, 100%)'/>
                                <button type='button' aria-label='back-button' >Back</button>
                            </>
                            :
                            <>
                                <IconLeftArrow width='16' fill='hsl(0, 0%, 52%)'/>
                                <button type='button' aria-label='back-button'>Back</button>
                            </>
                    }
                </div>
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
                                currencies={ item.currencies }
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