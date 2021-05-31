import { useRef, useContext } from 'react'
import {  useHistory } from 'react-router-dom'
//HOOKS
import  { useIntersectionObserver } from '../hooks/useIntersectionBrowser'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'
//CONTEXT
import AppContext from '../context/AppContext'


// ________________________________________________________________________


const CardMain = (props) => {
    const { darkMode } = useContext(AppContext)
    let history = useHistory()
    const element = useRef(null)
    const { show } = useIntersectionObserver(element)

    const handleClick = () => {
        history.push(`/Country/:${ props.title }`)
    }
    
    return(
        <article className={ darkMode ? `${ styles.CardMain } ${ styles.CardMain__darkMode}`: styles.CardMain } onClick={ handleClick } ref={ element } >
            {
                show &&
                    <>
                        <section className={ styles.Image }>
                            <img src={ props.img } alt="country-flag" />
                        </section>

                        <section className={ styles.Title }>
                            <h1>{ props.title }</h1>
                        </section>

                        <section className={ styles.Info }>
                            <h3><strong>Population:</strong> { props.population }</h3>
                            <h3><strong>Region:</strong> { props.region }</h3>
                            <h3><strong>Capital:</strong> { props.capital } </h3>
                        </section>
                    </>
            }
        </article>
    
    )
}

export default CardMain
