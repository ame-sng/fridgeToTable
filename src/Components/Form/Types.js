import React from 'react'
import { MenuItem } from '@material-ui/core'
import { FormControl } from "@material-ui/core";
import {Select} from '@material-ui/core'
import { InputLabel } from "@material-ui/core";


const Types = (props) => {
    return (
        <FormControl className={props.classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.addValue.type}
          onChange={props.typeChange}
        >
          <MenuItem value={""}>-</MenuItem>
          <MenuItem value={"main course"}>Main Course</MenuItem>
          <MenuItem value={"side dish"}>Side Dish</MenuItem>
          <MenuItem value={"dessert"}>Dessert</MenuItem>
          <MenuItem value={"appetizer"}>Appetizer</MenuItem>
          <MenuItem value={"salad"}>Salad</MenuItem>
          <MenuItem value={"bread"}>Bread</MenuItem>
          <MenuItem value={"breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"soup"}>Soup</MenuItem>
          <MenuItem value={"beverage"}>Beverage</MenuItem>
          <MenuItem value={"sauce"}>Sauce</MenuItem>
          <MenuItem value={"marinade"}>Marinade</MenuItem>
          <MenuItem value={"fingerfood"}>Fingerfood</MenuItem>
          <MenuItem value={"snack"}>Snack</MenuItem>
          <MenuItem value={"drink"}>Drink</MenuItem>
        </Select>
      </FormControl>
    )
}

export default Types
