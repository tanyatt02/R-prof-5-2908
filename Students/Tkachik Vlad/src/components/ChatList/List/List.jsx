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

export default function ListDividers() {
    let classes = useStyles();

    const checkChat = (evt) => {
        console.log(evt);
    }

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button className='selectChat chat_1'
                      onClick={ checkChat }>
                <ListItemText primary="Darth" />
            </ListItem>
            <Divider />
            <ListItem button divider className='selectChat chat_2'
                      onClick={ checkChat }>
                <ListItemText primary="Chub aka" />
            </ListItem>
            <ListItem button className='selectChat chat_3'
                      onClick={ checkChat }>
                <ListItemText primary="Lea" />
            </ListItem>
            <Divider light />
        </List>
    );
}