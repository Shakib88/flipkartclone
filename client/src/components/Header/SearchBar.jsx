import React from 'react';

import { makeStyles, alpha, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons'; 

const useStyle = makeStyles((theme)=>({
    search: {
        
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',
        color: 'black',
        
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        //alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
      },
      inputInput: {
        paddingLeft:20,
        
      },

}));

const SearchBar = () => {

    const classes = useStyle();

    return (
        <div className={classes.search}>
            
            <InputBase
              placeholder="Search for products and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <div className={classes.searchIcon}>
               <Search />
              </div>

          </div>

    )
};

export default SearchBar;