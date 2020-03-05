import React from 'react';
import '../styles/buttonAdd.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import ModalButtonAdd from './ModalButtonAdd';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const ButtonAdd = React.forwardRef(({
  dishList,
  setNewDish,
}, ref) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="button-container">
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        size={"large"}
        onClick={handleOpen}
      >
        Создать рецепт
      </ColorButton>
      <ModalButtonAdd 
        ref={ref}
        dishList={dishList}
        setNewDish={setNewDish}
        open={open}
        handleClose={handleClose}
      />
    </div>
  )
})
