import React from 'react';
import { GridList, Box, Typography, Fab, Tooltip, CardContent, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TableIngridients from './TableIngridients';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  recipe: {
    padding: '0 0 10px 0'
  },
  buttonIcon: {
    marginLeft: '10px'
  },
  cardSize: {
    height: '680px'
  },
  gridList: {
    height: '150px',
  },
  gridListRecipe: {
    height: '100px',
    wordWrap: 'break-word',
    overflowX: 'auto',
    marginTop: '10px'
  },
  cooking: {
    marginBottom: '15px'
  },
  title: {
    height: '92px',
    maxWidth: '75%',
    overflow: 'auto',
    wordWrap: 'break-word'
  }
}));

const Content = ({
  dish,
  page,
  menu,
  changeImg,
  deleteDish,
  changeTime,
  handleOpen,
  changeRecipe,
  changeIngredients,
  setCurrentDish,
  changeName}) => {
    const classes = useStyles();
  return (
    <CardContent>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.tableHeader}
      >
      <Typography variant="h4" component="h2" className={classes.title}>
        <span className="title_dish">
          {menu.title}
        </span>
      </Typography>
        <Grid>
          <Tooltip title="Редактировать" aria-label="add">
            <Fab color="primary" size="small" onClick={()=> {
              handleOpen()
              changeName(menu.title)
              changeTime(menu.timeCooking)
              const ingridientsCopy = JSON.stringify(menu.ingredients)
              changeIngredients(JSON.parse(ingridientsCopy))
              changeRecipe(menu.recipe)
              setCurrentDish(dish)
              changeImg(menu.img)
            }}>
              <EditIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Удалить рецепт" aria-label="add">
            <Fab
              color="secondary"
              aria-label="edit"
              size="small"
              className={classes.buttonIcon}
            >
              <DeleteForeverIcon onClick={()=> deleteDish(page-1)}/>
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
      <Typography component="h3" >
        Дата создания рецепта - {menu.date}
      </Typography>
      <Typography component="h3" className={classes.cooking}>
        Время приготовления - {menu.timeCooking} минут
      </Typography>
      <GridList className={classes.gridList} style={{margin: '0'}}>
          <TableIngridients menu={menu}/>
      </GridList>
      <Box className={classes.gridListRecipe} style={{height: 'content'}}>
        <Typography
          variant="h5"
          component="h3"
          className={classes.recipe}
        >
          Как готовить:
          <br/>
        </Typography>
        {menu.recipe}
      </Box>
    </CardContent>
  )
}

export default Content;