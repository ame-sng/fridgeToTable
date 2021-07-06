import React from 'react'
import  {Route, Switch } from 'react-router-dom'
import Home from './Home'
import InputForm from '../Recipe/InputForm'
import Dish from '../Recipe/Dish'


const Main = () => {
    return(
<main>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes/:id" component={Dish} />
        <Route path="/recipes" component={InputForm} />
    </Switch>
</main>
    )

}

export default Main