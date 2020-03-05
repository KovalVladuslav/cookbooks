import React, {useState, Fragment} from 'react';
import '../index.css';
import {CardActions, CardMedia, Card} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Content from './Content';

export const Cards = ({
  dish,
  changeImg,
  dishList,
  setNewDish,
  changeTime,
  handleOpen,
  changeRecipe,
  changeIngredients,
  setCurrentDish,
  changeName}) => {
  const [page, setPage] = useState(1)

  const deleteDish = (index) => {
    if (dish.length === 1) {
      const filterArr = dishList.filter(item =>item !== dish)
      setNewDish([...filterArr])

      return
    }
    dish.splice(index, 1)
    setNewDish([...dishList])

    if(index === dish.length) {
      setPage(dish.length)
    }
  }

  return (
    <Card >
      {dish.filter((item, index) => index === page-1).map((menu, index) => (
        <Fragment key={index}>
          <CardMedia
            component="img"
            alt={menu.title}
            height="220"
            image={menu.img}
            title={menu.title}
          />
          <Content
            page={page}
            dish={dish}
            changeImg={changeImg}
            deleteDish={deleteDish}
            menu={menu}
            changeTime={changeTime}
            handleOpen={handleOpen}
            changeRecipe={changeRecipe}
            changeIngredients={changeIngredients}
            setCurrentDish={setCurrentDish}
            changeName={changeName}
          />
        </Fragment>
      ))}
      <CardActions>
        <Pagination
          count={dish.length}
          color="primary"
          size="small"
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </CardActions>
    </Card>
  )
}
