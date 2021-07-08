import React from 'react'
import { MenuItem } from '@material-ui/core'
import { FormControl } from "@material-ui/core";
import {Select} from '@material-ui/core'
import { InputLabel } from "@material-ui/core";


const Cuisines = (props) => {
    
    
    return (
        <FormControl className={props.classes.formControl}>
        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.addValue.cuisine}
          onChange={props.cuisineChange}
        >
          <MenuItem value={null}>-</MenuItem>
          <MenuItem value={"African"}>African</MenuItem>
          <MenuItem value={"American"}>American</MenuItem>
          <MenuItem value={"British"}>British</MenuItem>
          <MenuItem value={"Cajun"}>Cajun</MenuItem>
          <MenuItem value={"Caribbean"}>Caribbean</MenuItem>
          <MenuItem value={"Chinese"}>Chinese</MenuItem>
          <MenuItem value={"Eastern European"}>Eastern European</MenuItem>
          <MenuItem value={"European"}>European</MenuItem>
          <MenuItem value={"French"}>French</MenuItem>
          <MenuItem value={"German"}>German</MenuItem>
          <MenuItem value={"Greek"}>Greek</MenuItem>
          <MenuItem value={"Indian"}>Indian</MenuItem>
          <MenuItem value={"Irish"}>Irish</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"Japanese"}>Japanese</MenuItem>
          <MenuItem value={"Jewish"}>Jewish</MenuItem>
          <MenuItem value={"Korean"}>Korean</MenuItem>
          <MenuItem value={"Latin American"}>Latin American</MenuItem>
          <MenuItem value={"Mediterranean"}>Mediterranean</MenuItem>
          <MenuItem value={"Mexican"}>Mexican</MenuItem>
          <MenuItem value={"Middle Eastern"}>Middle Eastern</MenuItem>
          <MenuItem value={"Nordic"}>Nordic</MenuItem>
          <MenuItem value={"Southern"}>Southern</MenuItem>
          <MenuItem value={"Spanish"}>Spanish</MenuItem>
          <MenuItem value={"Thai"}>Thai</MenuItem>
          <MenuItem value={"Vietnamese"}>Vietnamese</MenuItem>
          
          </Select>
      </FormControl>
    )
}

export default Cuisines
