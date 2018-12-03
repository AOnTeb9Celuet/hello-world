import React from 'react';
import './isModal.css'

class FirstModal extends React.Component{
    
    state = {
        isModal: true
    }

    render() {

let isModal = this.state.isModal
let changeModal = () => this.setState(isModal ? {isModal: false} : {isModal: true})

        return (
            isModal ?
           <div className = 'modal' onClick = {changeModal}>
               <p>First modal window</p>
               <button type = 'button' onClick = {changeModal}>Close</button>
           </div>
            : null
        )
        
    }
};

export default FirstModal;