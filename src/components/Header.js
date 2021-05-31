//COMPONENTS
import IconMoon from './IconMoon'
//ESTILOS
import styles from '../styles/components/Header.module.css'

const Header = () => {

    return (
        <header className={ styles.Header }>
            <section className={ styles.Title }>
                <h1>Where in the world?</h1>
            </section>

            <section className={ styles.Theme }>
                <div className={ styles.Theme__icon}>
                     <IconMoon width='16px' height='16px'/>
                </div>
                <button className={ styles.Theme__button } type='button' aria-label='ButtonTheme' >
                    Dark Mode
                </button>
                
            </section>
        </header>
    )
}

export default Header
