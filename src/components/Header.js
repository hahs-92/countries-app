import { useContext, useEffect } from 'react'
//COMPONENTS
import IconMoon from './IconMoon'
//ESTILOS
import styles from '../styles/components/Header.module.css'
//CONTEXT
import AppContext from '../context/AppContext'

// ________________________________________________________________


const Header = () => {
    const { darkMode, setDarkMode } = useContext(AppContext)

    //USE EFFECTS PARA MANEJAR SI EL USUARIO ESTA EN MODO OSCURO
    useEffect(() => {
        let local = localStorage.getItem('darkMode','true')
        if(local === 'true'){
            setDarkMode(true)
        }
        else{
            setDarkMode(false)
        }
    },[])

    useEffect(()=> {
        darkMode ? window.localStorage.setItem('darkMode', 'true') :  window.localStorage.setItem('darkMode', 'false')
    },[darkMode])

    const handleClick = () => setDarkMode(!darkMode)


    return (
        <header className={ styles.Header }>
            <section className={ darkMode ? `${ styles.Title } ${ styles.Title__darkMode}`: styles.Title }>
                <h1>Where in the world?</h1> 
            </section>

            <section className={ styles.Theme }>
                <div className={ styles.Theme__icon}>
                    {
                        darkMode
                            ?
                            <IconMoon width='16px' height='16px' fill='hsl(0, 0%, 100%)'/>
                            :
                            <IconMoon width='16px' height='16px' fill='hsl(0, 0%, 52%)'/>
                    }
                </div>
                <button className={ darkMode ? `${ styles.Theme__button } ${ styles.Theme__button__darkMode}`: styles.Theme__button } type='button' aria-label='ButtonTheme' onClick={ handleClick } >
                    Dark Mode
                </button>
                
            </section>
        </header>
    )
}

export default Header
