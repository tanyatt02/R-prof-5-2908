import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ListDividers(props) {
    let classes = useStyles();

    const checkChat = (evt) => {
        console.log(evt);
        console.log(props.chatNames);
        console.log(props.chatId);
    }

    return (
        <List component="nav"
              className={classes.root}
              aria-label="mailbox folders">
            <Link to='/chat/1'>
                <ListItem button className='selectChat chat_1'
                          onClick={ checkChat }>
                    <ListItemText primary={ props.chatNames[0] } />
                </ListItem>
            </Link>
            <Divider />
            <Link to='/chat/2'>
                <ListItem button divider className='selectChat chat_2'
                          onClick={ checkChat }>
                    <ListItemText primary={ props.chatNames[1] } />
                </ListItem>
            </Link>
            <Link to='/chat/3'>
                <ListItem button className='selectChat chat_3'
                          onClick={ checkChat }>
                    <ListItemText primary={ props.chatNames[2] } />
                </ListItem>
            </Link>
            <Divider light />
        </List>
    );
}