import React from 'react'
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const Ingredients = (props) => {
    return (
        <>
            <form noValidate autoComplete="off">
            <TextField
              className={props.classes.field}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="beef, broccoli, ginger"
              value={props.addValue.ingredients}
              onChange={props.handleChange}
              // onKeyDown={handleKeyDown}
            />
          </form>
        </>
    )
}

export default Ingredients
