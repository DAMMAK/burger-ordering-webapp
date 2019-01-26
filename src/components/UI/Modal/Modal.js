import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/auxillary'
import Backdrop from '../Backdrop/Backdrop'

const modal =(props)=>(
    <Aux>
        <Backdrop show={props.show} cancel ={props.cancel} />
    {/* <div className={classes.Modal__Body} style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
    opacity: props.show ? '1': '0',
}}> */}
        <div className={classes.Modal}
        style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1': '0',
            }}
        >
            {props.children}
        </div>
        {/* </div> */}
        </Aux>
);

export default modal