//ESTILOS
import { useEffect, useState } from 'react'
import styles from '../styles/components/BorderTag.module.css'

const BorderTag = (props) => {
    const [ border, setBorder ] = useState('')
    const code = props.tag

    const getData = async() => {
        const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${ code }`)
        const response = await data.json()
        const name = await response.nativeName
        setBorder(name)
    }

    useEffect(() => {
        getData()
    },[])
    
    return(
        <>
            {
                border &&
                <article className={ styles.BorderTag }>
                    <h3 className={ styles.Tag }>{ border }</h3>
                </article>
            }
        </>
    )
}

export default BorderTag