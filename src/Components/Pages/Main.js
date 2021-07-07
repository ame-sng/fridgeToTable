import React from 'react'
import  {Route, Switch } from 'react-router-dom'
import Home from './Home'
import InputForm from '../Recipe/InputForm'
import Dish from '../Recipe/Dish'
import ShowRecipe from '../Recipe/ShowRecipe'


const Main = () => {
    return(
<main>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes/:id" component={Dish} />
        {/* <Route path="/recipe/:ingredients/:cuisine/:type" component={ShowRecipe} /> */}
        <Route path="/recipes" component={InputForm} />
    </Switch>
</main>
    )

}

export default Main