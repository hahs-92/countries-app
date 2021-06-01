import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
//ESTILOS
import styles from '../styles/components/BorderTag.module.css'
//CONTEXT
import AppContext from '../context/AppContext'

// ___________________________________________________________________________

const BorderTag = (props) => {
    const { darkMode } = useContext(AppContext)
    let history = useHistory()
    const [ border, setBorder ] = useState('')
    const code = props.tag

    const getDataByCode = async() => {
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
        getDataByCode()
        // eslint-disable-next-line 
    },[])

    
    return(
        <>
            {
                border &&
                <article className={ darkMode ? `${ styles.BorderTag } ${ styles.BorderTag__darkMode}`: styles.BorderTag } onClick={ handleOnClick }>
                    <h3 className={ styles.Tag }>{ border }</h3>
                </article>
            }
        </>
    )
}

export default BorderTag