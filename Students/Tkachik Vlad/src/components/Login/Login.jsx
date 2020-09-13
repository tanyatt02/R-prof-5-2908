import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
/*import { makeStyles } from '@material-ui/core/styles';*/
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

/*const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);*/

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);



export default class CustomizedDialogs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
        /*classes: useStyles(),*/
    }

    handleClose = () => {
        this.setState({ isOpen: false });
        console.log(this.props.userName);
    };

    handleChange = evt => {
        this.props.getUserName(evt.target.value);
    }

    /*useStyles = () => {
        makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '25ch',
                },
            },
        }));
    }*/

    componentDidMount() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <div>

                {/*userName = { this.state.userName }*/}
                <Dialog onClose={this.handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={ this.state.isOpen }>
                    <DialogTitle id="customized-dialog-title"
                                 onClose={this.handleClose}>
                        Enter your login:
                    </DialogTitle>
                    <form className= "loginName"
                          noValidate autoComplete="off">
                        <TextField
                            id="outlined-basic"
                            label="Login"
                            variant="outlined"
                            onChange={ this.handleChange } />
                    </form>
                    <DialogActions>
                        <Button autoFocus
                                onClick={this.handleClose}
                                color="primary">
                            Save login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
