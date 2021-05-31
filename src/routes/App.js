import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

//PAGES
import Home from '../Pages/Home'
import Country from '../Pages/Country'

//CONTEXT
import AppContext from '../context/AppContext'


const App = () => {
    const [ darkMode, setDarkMode ] = useState(false)
    return(
        <BrowserRouter>
            <AppContext.Provider  value={ { darkMode, setDarkMode }}>
                <Switch >
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/Country/:id' component={ Country } />
                </Switch>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

export default App