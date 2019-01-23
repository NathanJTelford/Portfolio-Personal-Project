import React from 'react';

const Modal = ({ handleClose, show, children, deleteAccount }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';


    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <h2>Are you sure?</h2>
                <div className='modal-button'>
                    <button onClick={deleteAccount}>Delete</button>
                    <button onClick={handleClose}>
                        Cancel
           </button>
                </div>
            </section>
        </div>
    )
}
export default Modal;