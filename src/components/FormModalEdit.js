import React from 'react';
import '../index.css';
import SelectIngredients from './SelectIngredients';
import { Grid, Button, Fade, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 0),
    width: '50%',
    maxHeight: '600px',
    overflow: 'scroll'
  },
  inputForm: {
    margin: '25px 0',
    width: '210px',
    padding: '5px'
  },
  textRecipe: {
    width: '100%',
    padding: '10px 0',
    marginTop: '15px',

  },
  button: {
    margin: '10px auto',
    display: 'block'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    flexWrap: 'wrap'
  }
}));

export const FormModalEdit = React.memo(({
  open,
  name,
  time,
  changeName,
  changeTime,
  newIngridients,
  changeIngredients,
  changeRecipe,
  recipe,
  addDish}) => {
  const classes = useStyles();
  return (
    <Fade in={open}>
      <div className={classes.paper}>
        <form className={classes.form}>
          <Grid className={classes.header}>
            <TextField
              className={classes.inputForm}
              error={Boolean(!name.length)}
              id="standard-error-helper-text"
              label="Название блюда"
              value={name}
              helperText={!name.length && "Должно содержать 2-20 символов"}
              onChange={(event)=> changeName(event.target.value)}
            />
            <TextField
              className={classes.inputForm}
              error={Boolean(time <=0)}
              label="Время приготовления-мин"
              value={time}
              helperText={time <= 0 && "Введите время приготовления"}
              onChange={(event)=> changeTime(event.target.value)}
              type="number"
              inputProps={{ min: "5", max: "500", step: "5" }}
            />
          </Grid>
          <SelectIngredients
            newIngridients={newIngridients}
            changeIngredients={changeIngredients}
          />
          <TextField
            className={classes.textRecipe}
            value={recipe}
            onChange={(event)=>changeRecipe(event.target.value)}
            label="Рецепт приготовления:"
            multiline
            rows="6"
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={addDish}
          >
            РЕДАКТИРОВАТЬ
          </Button>
        </form>
      </div>
    </Fade>
  )
})