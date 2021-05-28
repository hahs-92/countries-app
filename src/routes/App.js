import { BrowserRouter, Switch, Route } from 'react-router-dom'

//PAGES
import Home from '../Pages/Home'
import Country from '../Pages/Country'


const App = () => {
    return(
        <BrowserRouter>
            <Switch >
                <Route exact path='/' component={ Home }/>
                <Route exact path='/Country' component={ Country } />
            </Switch>
        </BrowserRouter>
    )
}

export default App