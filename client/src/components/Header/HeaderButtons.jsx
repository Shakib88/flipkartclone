import { Badge, Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {ShoppingCart} from '@material-ui/icons';

const useStyle = makeStyles({
    login:{

        background: '#ffffff',
        color: '#2874f0',
        textTransform:'none',
        fontWeight:600,
        borderRadius:2,
        padding: '5px 40px',
        boxShadow: 'none'

    },

    wrapper:{


        marginLeft:'70%',
        margin: '0 5% 0 auto',
        display: 'flex',
        '& > *' : {
            marginRight:50,
            fontSize: 12,
            alignItem: 'center'
        }

    },

    container:{
        display: 'flex',
    }

});



const HeaderButtons = () => {
    const classes = useStyle();
    return (
        <div>
            <Box className={classes.wrapper}>
                    <Button variant="contained" className={classes.login}>Login</Button>
                    <Typography style={{fontSize:17}}>More</Typography>

                    <Box className={classes.container}>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart/>
                        </Badge>

                        <Typography style={{marginLeft:10}}>Cart</Typography>
                    </Box>
            </Box>
        </div>
    );
};

export default HeaderButtons;