import React from 'react'
import  {Route, Switch } from 'react-router-dom'
import Home from './Home'
import FormMain from '../Form/FormMain'
import Dish from '../Recipe/Dish'



const Main = () => {
    return(
<main>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes/:id" component={Dish} />
        <Route path="/recipes" component={FormMain} />
    </Switch>
</main>
    )

}

export default Main