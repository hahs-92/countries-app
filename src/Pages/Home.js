import { useEffect, useState, useContext } from 'react';
//ESTILOS
import '../styles/Global.css'
import styles from '../styles/Home.module.css'
//COMPONENTS
import CardMain from '../components/CardMain'
import Header from '../components/Header'
import IconSearch from '../components/IconSearch'
import IconDownArrow from '../components/IconDownArrow'
import Loader from '../components/Loader'
//CONTEXT
import AppContext from '../context/AppContext'


// _________________________________________________________________________________________


function Home() {
  const { darkMode } = useContext(AppContext)
  const BASEURL = 'https://restcountries.eu/rest/v2/all'
  const URLNAME = 'https://restcountries.eu/rest/v2/name/'
  const URLREGION = 'https://restcountries.eu/rest/v2/region/'
  const [ data, setData ]  = useState([])
  const [ isOptions, setIsOptions ] = useState(false)

  const getData = async(url) => {
    try {   
      const info = await fetch(url)
      const response = await info.json()
      setData(response)
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnChange = (e) => {
    let search = e.target.value
    if(search.length > 2) {
      const url = `${ URLNAME }${ search }`
      getData(url)
    }
    if(search.length < 1) {
      getData(BASEURL)
    }
  }

  const handleClickOptions = (e) => {
    const region = e.target.textContent
    getData(`${ URLREGION }${ region.toLowerCase() }`)
    setIsOptions(!isOptions)
  }

  const handleClick = () => {
    setIsOptions(!isOptions)
  }

  useEffect(() => {
    getData(BASEURL)
  },[])


  return (
    <section className={ darkMode ? `${ styles.Home } ${ styles.Home__darkMode}`: styles.Home }>
      <section className= {  darkMode ? `${ styles.Header } ${ styles.Header__darkMode}`: styles.Header }>
        <Header />
      </section>

      <section className={ styles.Inputs }>

        <article className={ darkMode ? `${ styles.Search } ${ styles.Search__darkMode}`: styles.Search }>
          <div className={ styles.Search__icon }>
            {
              darkMode
                ?
                <IconSearch width='20' height='20' fill='hsl(0, 0%, 100%)' />
                :
                <IconSearch width='20' height='20' fill='hsl(0, 0%, 52%)' />
            }
          </div>
          <div className={ darkMode ? `${ styles.Search__input } ${ styles.Search__input__darkMode}`: styles.Search__input }>
            <label htmlFor="search">
              <input id='search' type="text" placeholder='Search for a country...'  onChange={ handleOnChange }/>
            </label>
          </div>
        </article>

        <article className={ styles.SearchFilter }>
          <section className={ darkMode ? `${ styles.Filter } ${ styles.Filter__darkMode}`: styles.Filter }>

            <div className={ styles.Filter__title }>
              <h3>Filter by region</h3>
            </div>
            <div className={ styles.Filter__icon } onClick={ handleClick }>
              {
                darkMode
                ?
                <IconDownArrow width='13' height='13' fill='hsl(0, 0%, 100%)' />
                :
                <IconDownArrow width='13' height='13'  fill='hsl(0, 0%, 52%)'/>
              }
            </div>
          </section>
        </article>

      </section>

      <section className={ !isOptions ? `${ styles.Options }`: `${ styles.Options } ${ styles.OptionsActive }` }>
        <div className={ darkMode ? `${ styles.Options__container } ${ styles.Options__container__darkMode}`: styles.Options__container }>
          <div className={ darkMode ? `${ styles.Options__filter } ${ styles.Options__filter__darkMode}`: styles.Options__filter  }>
            <ul>
              <li onClick={ handleClickOptions }>Africa</li>
              <li onClick={ handleClickOptions }>Americas</li>
              <li onClick={ handleClickOptions }>Asia</li>
              <li onClick={ handleClickOptions }>Europe</li>
              <li onClick={ handleClickOptions }>Oceania</li>
            </ul>
          </div>
        </div>
        </section>

      <section className={ styles.Main }>

       {
         data.length > 0  
         ?
          data.map(item => (
            <CardMain 
              key={ item.name } 
              img={ item.flag } 
              title={ item.name } 
              population={ item.population } 
              region={ item.region } 
              capital={ item.capital } 
              />
          ))
        :
            <Loader />
       }
      </section>

    </section>
  )
}

export default Home;