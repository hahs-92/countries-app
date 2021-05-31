import { useRef } from 'react'
import {  useHistory } from 'react-router-dom'
//HOOKS
import  { useIntersectionObserver } from '../hooks/useIntersectionBrowser'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'

const CardMain = (props) => {
    let history = useHistory()
    const element = useRef(null)
    const { show } = useIntersectionObserver(element)

    const handleClick = () => {
        history.push(`/Country/:${ props.title }`)
    }
    
    return(
        <article className={ styles.CardMain } onClick={ handleClick } ref={ element } >
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
