import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyle = makeStyles({
    login:{

        background: '#ffffff',
        color: '#2874f0',
        textTransform:'none',
        fontWeight:600,
        borderRadius:2,
        padding: '5px 40px',

    },

    wrapper:{
        margin: '0 5% 0 auto',
        display: 'flex'

    }

});



const HeaderButtons = () => {
    const classes = useStyle();
    return (
        <div>
            <Box className={classes.wrapper}>
                    <Button variant='contained' className={classes.login}>Login</Button>
                    <Typography>More</Typography>

                    <Box>
                        <Typography>Cart</Typography>
                    </Box>
            </Box>
        </div>
    );
};

export default HeaderButtons;