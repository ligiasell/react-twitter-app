import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import Button from '../button'

import './styles.css'

const Modal = ({ isOpen, children, onClose }) => (
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
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  title: '',
  onClose: () => {},
  children: null,
}

export default Modal
