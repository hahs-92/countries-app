import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
//ESTILOS
import styles from '../styles/components/BorderTag.module.css'

const BorderTag = (props) => {
    let history = useHistory()
    const [ border, setBorder ] = useState('')
    const code = props.tag

    const getData = async() => {
        try {     
            const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${ code }`)
            const response = await data.json()
            const name = await response.nativeName
            setBorder(name)
        } catch (error) {
            console.error(error)
        }
    }

    const handleOnClick = () => {
        history.push(`/Country/:${ border }`)
    }

    useEffect(() => {
        getData()
    },[])
    
    return(
        <>
            {
                border &&
                <article className={ styles.BorderTag } onClick={ handleOnClick }>
                    <h3 className={ styles.Tag }>{ border }</h3>
                </article>
            }
        </>
    )
}

export default BorderTag