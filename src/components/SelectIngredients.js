import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import '../index.css';
import '../styles/iconDelete.css';
import { InputControl } from './InputControl';

const useStyles = makeStyles(theme => ({
  main: {
    textAlign: 'center'
  },
  button: {
    margin: '10px auto',
  },
}));

const SelectIngredients = ({newIngridients, changeIngredients}) => {
  const classes = useStyles();

  const deleteIngridient = (index) => {
    newIngridients.splice(index,1)
    changeIngredients([...newIngridients])
  }

  return (
    <>
      <Grid className={classes.main} container justify="center">
        {newIngridients.map((item, index) => (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{
            width:"315px",
            margin: '0px 15px'
            }}
            key={index}
          >
            <InputControl
              newIngridients={newIngridients}
              index={index}
              changeIngredients={changeIngredients}
            />
            <Box className="boxDelete">
              <DeleteForeverRoundedIcon className="buttonDelete" onClick={()=>deleteIngridient(index)}/>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={()=> {
          newIngridients.push({name:'', size:''})
          changeIngredients([...newIngridients])
        }}
      >
        Добавить ингредиентов
      </Button>
    </>
  );
} 

export default SelectIngredients;