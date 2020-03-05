import React, {useState, useEffect} from 'react';
import './index.css';
import { ModalBlock } from './components/ModalBlock';
import { Cards } from './components/Cards';
import {foodList} from './API/api'
import {Container, Grid} from '@material-ui/core';
import { Title } from './components/Title';
import { ButtonAdd } from './components/ButtonAdd';

const App = () => {
  const [dishList, setNewDish] = useState(foodList)
  const [open, setOpen] = React.useState(false);

  const [time, changeTime] = useState(0)
  const [name, changeName] = useState('')
  const [newIngridients, changeIngredients] = useState([])
  const [recipe, changeRecipe] = useState([])
  const [img, changeImg] = useState('')

  const [currentDish, setCurrentDish] = useState([])
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("menu");
    if (data) {
      setNewDish(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(dishList))
  });

  return (
    <>
      <Title />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {dishList.map((dish, i)=>(
            <Grid item xs={12} sm={6} lg={4} key={new Date().getMilliseconds+i}>
              <Cards
                changeImg={changeImg}
                dishList={dishList}
                dish={dish}
                setNewDish={setNewDish}
                changeTime={changeTime}
                changeName={changeName}
                changeIngredients={changeIngredients}
                changeRecipe={changeRecipe}
                setCurrentDish={setCurrentDish}
                handleOpen={handleOpen}
              />
            </Grid>
          ))}
        </Grid>
        <ModalBlock 
          img={img}
          dish={currentDish}
          dishList={dishList}
          setNewDish={setNewDish}
          changeTime={changeTime}
          changeName={changeName}
          changeRecipe={changeRecipe}
          open={open}
          newIngridients={newIngridients}
          recipe={recipe}
          name={name}
          time={time}
          changeIngredients={changeIngredients}
          handleClose={handleClose}
        />
      </Container>
      <ButtonAdd
        dishList={dishList}
        setNewDish={setNewDish}
      />
    </>
  )
}

export default App;