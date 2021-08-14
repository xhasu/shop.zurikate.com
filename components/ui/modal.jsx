import React, { useState } from 'react'
import { CloseIcon } from './svgs';

const Modal = ({children, isOpen = false, handleOpen}) => {

  const openClass = isOpen ? 'modal-open' : '';

  return (
    <div className={`modal ${openClass}`}>
      <div className="modal-box">
        {children}
        <span className="modal-close" onClick={() => {handleOpen(false)}}>
          <CloseIcon />
        </span>
      </div>
    </div>
  )
}

export default Modal
