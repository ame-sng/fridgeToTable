import React from 'react'
import { Container } from '@material-ui/core';
import Cuisines from './Cuisines';
import Types from './Types';
import Ingredients from './Ingredients';

const FormQuery = (props) => {
    return (
        <Container>
          <Ingredients addValue={props.addValue} classes={props.classes} handleChange={props.handleChange}/>
          <div className={props.classes.select}>
          <Cuisines addValue={props.addValue} classes={props.classes} cuisineChange={props.cuisineChange}/>
          <Types addValue={props.addValue} classes={props.classes} typeChange={props.typeChange} />
          </div>
        </Container>
    )
}

export default FormQuery
