import { useEffect, useState } from 'react';
//ESTILOS
import '../styles/Global.css'
import styles from '../styles/Home.module.css'
//IMAGES
import iconSearch from '../assets/search-interface-symbol.svg'
import iconArrow from '../assets/down-arrow.svg'
//COMPONENTS
import CardMain from '../components/CardMain'
import Header from '../components/Header'


// _________________________________________________________________________________________


function Home() {
  const BASEURL = 'https://restcountries.eu/rest/v2/all'
  const [ data, setData ]  = useState([])

  const getData = async(url) => {
    const info = await fetch(url)
    const response = await info.json()
    setData(response)
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
            <img src={ iconSearch } alt="search-icon" />
          </div>
          <div className={ styles.Search__input }>
            <input type="text" placeholder='Search for a country...' />
          </div>
        </article>

        <article className={ styles.SearchFilter }>
          <section className={ styles.Filter }>
            <div className={ styles.Filter__title }>
              <h3>Filter by region</h3>
            </div>
            <div className={ styles.Filter__icon }>
              <img src={ iconArrow } alt="arrow-icon" />
            </div>
          </section>
        </article>

      </section>

      <section className={ styles.Options }>
        <div className={ styles.Options__container }>
          <div className={ styles.Options__filter }>
            <ul>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
        </section>

      <section className={ styles.Main }>

       {
         data.length > 0  &&
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
       }
      </section>

    </section>
  )
}

export default Home;