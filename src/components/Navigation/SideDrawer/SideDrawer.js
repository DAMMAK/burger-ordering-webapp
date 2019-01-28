import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../../components/UI/Backdrop/Backdrop';
import Aux from '../../../hoc/auxillary';

const sideDrawer =(props)=>
{
    const attachment = props.open ?[classes.SideDrawer, classes.Open] :[classes.SideDrawer, classes.Close];

    return (

        <Aux>
        <BackDrop show={props.open} cancel={props.closed} />
        <div className={attachment.join(' ')}>
        <div className={classes.Logo}>
            <Logo />
        </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;