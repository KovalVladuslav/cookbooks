import React, {useState} from 'react';
import '../index.css';
import { FormModalButtonAdd } from './FromModalButtonAdd';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ModalBlock = ({
  dishList,
  setNewDish,
  open,
  handleClose}) => {
  const [time, changeTime] = useState(0)
  const [name, changeName] = useState(0)
  const [newIngridients, changeIngredients] = useState([])
  const [recipe, changeRecipe] = useState()
  const [img, setImage] = useState()

  const classes = useStyles();

  const getCurrentData = (date) => {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
  }

  const createNewRecipe = () => {
    const newDish = {
      title: name,
      date: getCurrentData(new Date()),
      timeCooking: time,
      ingredients: newIngridients,
      recipe,
      img: (img || 'https://99px.ru/sstorage/53/2011/09/tmb_22745_4251.jpg')
    }

    dishList.unshift([newDish])
    setNewDish([...dishList])
    handleClose()
    changeTime(0)
    changeName('')
    changeIngredients([])
    setImage('')
    changeRecipe('')
  }

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <FormModalButtonAdd 
        createNewRecipe={createNewRecipe}
        open={open}
        name={name}
        changeName={changeName}
        time={time}
        changeTime={changeTime}
        img={img}
        setImage={setImage}
        newIngridients={newIngridients}
        changeIngredients={changeIngredients}
        changeRecipe={changeRecipe}
        recipe={recipe}
      />
    </Modal>
  )
}

export default ModalBlock;