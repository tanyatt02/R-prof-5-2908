import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Link to = '/chat/1'>
        <ListItem button >Chat 1
        </ListItem>
      </Link> 
      <Link to = '/chat/2'>
        <ListItem button > Chat 2
        </ListItem>
      </Link>
      <Link to = '/chat/3'>
        <ListItem button > Chat 3
        </ListItem>
      </Link>   
    </List>
  );
}