import { useEffect, useState } from 'react';
//ESTILOS
import '../styles/Global.css'
import styles from '../styles/Home.module.css'
//COMPONENTS
import CardMain from '../components/CardMain'
import Header from '../components/Header'
import IconSearch from '../components/IconSearch'
import IconDownArrow from '../components/IconDownArrow'


// _________________________________________________________________________________________


function Home() {
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
    <section className={ styles.Home }>
      <section className= { styles.Header }>
        <Header />
      </section>

      <section className={ styles.Inputs }>

        <article className={ styles.Search }>
          <div className={ styles.Search__icon }>
            {/* <img src={ iconSearch } alt="search-icon" /> */}
            <IconSearch width='20' height='20' fill='hsl(0, 0%, 52%)' />
          </div>
          <div className={ styles.Search__input }>
            <input type="text" placeholder='Search for a country...'  onChange={ handleOnChange }/>
          </div>
        </article>

        <article className={ styles.SearchFilter }>
          <section className={ styles.Filter }>
            <div className={ styles.Filter__title }>
              <h3>Filter by region</h3>
            </div>
            <div className={ styles.Filter__icon } onClick={ handleClick }>
              {/* <img src={ iconArrow } alt="arrow-icon" /> */}
              <IconDownArrow width='13' height='13' />
            </div>
          </section>
        </article>

      </section>

      <section className={ !isOptions ? `${ styles.Options }`: `${ styles.Options } ${ styles.OptionsActive }` }>
        <div className={ styles.Options__container }>
          <div className={ styles.Options__filter }>
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
            <h1>Loading...</h1>
       }
      </section>

    </section>
  )
}

export default Home;