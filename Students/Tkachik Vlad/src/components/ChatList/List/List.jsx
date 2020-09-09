import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const useStylesChecked = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'olive',
    },
}));

export default function ListDividers() {
    let classes = useStyles();

    /*const checkChat = (id) => {
        classes = useStylesChecked();
        console.log(id)
    }*/

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button id='1' onClick={ () => {checkChat(1)} }>
                <ListItemText primary="Darth" />
            </ListItem>
            <Divider />
            <ListItem button divider id='2' onClick={ () => checkChat(2) }>
                <ListItemText primary="Chub aka" />
            </ListItem>
            <ListItem button id='3' onClick={ () => checkChat(3) }>
                <ListItemText primary="Lea" />
            </ListItem>
            <Divider light />
        </List>
    );
}