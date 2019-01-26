import React from 'react';
import Aux from '../../hoc/auxillary';
import classes from './Layout.css';

const layout =(props)=>(
   <Aux>
       <div > Toolbar,SlideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;