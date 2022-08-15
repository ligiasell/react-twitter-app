import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import Button from '../button'

import './styles.css'

const Modal = ({ isOpen, onClose, children }) => (
  <ReactModal
    className="modal"
    isOpen={isOpen}
    contentLabel="Dynamic content"
    overlayClassName="overlay"
    bodyOpenClassName="no-scroll"
    ariaHideApp={false}
    onRequestClose={onClose}
  >
    <div className="modal-close-button">
      <Button onClick={onClose}>X</Button>
    </div>
    <div>{children}</div>
  </ReactModal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
}

Modal.defaultProps = {
  onClose: () => {},
  children: null,
}

export default Modal
