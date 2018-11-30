import React from 'react';
import './isModal.css'

class SecondModal extends React.Component{
    
    state = {
        isModal: true
    }

    render() {

let checkModal = () => this.setState({isModal: false})

        return (
            this.state.isModal ?
           <div className = 'modal'>
               <p>Second modal window</p>
               <button type = 'button' onClick = {checkModal}>Close</button>
           </div>
            : ''

            
        )
    }
};

export default SecondModal;