import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/auxillary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState)
    {
      return nextProps.show !==this.props.show;
       
    }
    componentWillUpdate()
    {
        console.log('[Modal willUpdate]');
    }
    render()
    {
        return(
            <Aux>
            <Backdrop show={this.props.show} cancel ={this.props.cancel} />
        {/* <div className={classes.Modal__Body} style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
        opacity: props.show ? '1': '0',
    }}> */}
            <div className={classes.Modal}
            style={{transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: this.props.show ? '1': '0',
                }}
            >
                {this.props.children}
            </div>
            {/* </div> */}
            </Aux>
        )
    }
}
    

export default Modal