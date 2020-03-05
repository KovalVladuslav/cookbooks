import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl, InputBase } from '@material-ui/core';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  inputSum: {
    margin: theme.spacing(1),
    width: '30%',
    minWidth: '55px',
  },
  inputIngridient: {
    minWidth: '95px',
    width: '50%',
    margin: theme.spacing(1),
  }
}));

export const InputControl = ({
  newIngridients,
  index,
  changeIngredients
}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.inputIngridient}>
        <InputLabel htmlFor="demo-customized-textbox">
          Ингредиент
        </InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          value={newIngridients[index].name}
          onChange={event=>{
            newIngridients[index].name = event.target.value
            changeIngredients([...newIngridients])
          }}
        />
      </FormControl>
      <FormControl className={classes.inputSum}>
        <InputLabel htmlFor="demo-customized-textbox">
          Вес\шт
        </InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          value={newIngridients[index].size}
          onChange={event=>{
            newIngridients[index].size = event.target.value
            changeIngredients([...newIngridients])
          }}
        />
      </FormControl>
    </>
  )
}