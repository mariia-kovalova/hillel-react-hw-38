import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyled, Overlay } from './ModalWindow.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ children, onCloseModal }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onCloseModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }
    onCloseModal();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func.isRequired,
};
