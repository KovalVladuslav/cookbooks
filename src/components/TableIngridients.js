import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    padding: '0 25px 5px',
  },
  tableHeader: {
    padding: '0 0 15px 0'
  },
  tableRow: {
    padding: '5px 55px 5px 45px'
  },
  mainTable: {
    width: '95%'
  }
});

const TableIngridients = ({menu}) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.mainTable}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.table}>ингредиенты</TableCell>
            <TableCell className={classes.table} align="right">количество</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.ingredients.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row" className={classes.tableRow}>
              {row.name}
            </TableCell>
            <TableCell className={classes.tableRow} align="right">{row.size}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableIngridients