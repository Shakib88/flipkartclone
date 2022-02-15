import React from 'react';
import{ AppBar, Toolbar, makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    }
});

const Header = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header}>

            <Toolbar>

            </Toolbar>

        </AppBar>
    );
};

export default Header;