// COMPONENTES
import BorderTag from './BorderTag'
// ESTILOS
import styles from '../styles/components/CardCountry.module.css'

// ________________________________________________________________________

const CardCountry = (props) => {
    return(
        <article className={ styles.CardCountry }>
                <section className={ styles.Image }>
                    <img src={ props.img } alt={ `Flag- ${ props.name  }` } />
                </section>

                <section className={ styles.Content }>
                    <div className={ styles.Content__title }>
                        <h1>{ props.name }</h1>
                    </div>

                    <div className={ styles.Content__info1 }> 
                        <h3><strong>Native Name: </strong>{ props.nativeName }</h3>   
                        <h3><strong>Population: </strong>{ props.population }</h3>
                        <h3><strong>Sub Region: </strong>{ props.subRegion }</h3>
                        <h3><strong>Capital: </strong>{ props.capital }</h3>
                    </div>

                    <div className={ styles.Content__info2 }>
                        <div >
                            <h3><strong>Top Level Domain: </strong>{ props.domain }</h3>
                            {/* <h3><strong>Currencies: </strong>{ props.currencies }</h3> */}

                            <h3><strong>Currencies: </strong>
                                {
                                    props.currencies && 
                                        props.currencies.map(item => (
                                            <span key={ item } >{ item.name }</span>
                                        ))
                                }
                            </h3>

                            <h3><strong>Languages: </strong>
                               {
                                   props.languages &&
                                    props.languages.map(item => (  
                                        <span key={ item.name }>{ item.name}  </span> 
                                    ))
                               }
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3><strong>Border Countries:</strong></h3>
                        <section className={ styles.Info3__Borders }>
                            {
                                props.borders.map(item => (
                                    <BorderTag key={ item } tag={ item }/>
                                ))
                            }
                        </section>
                    </div>
                </section>
        </article>
    )
}

export default CardCountry