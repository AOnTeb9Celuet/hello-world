import React from 'react';
import './isModal.css'

class FirstModal extends React.Component{
    
    state = {
        isModal: true
    }

    render() {

let checkModal = () => this.setState({isModal: false})

        return (
            this.state.isModal ?
           <div className = 'modal'>
               <p>First modal window</p>
               <button type = 'button' onClick = {checkModal}>Close</button>
           </div>
            : ''

            
        )
    }
};

export default FirstModal;