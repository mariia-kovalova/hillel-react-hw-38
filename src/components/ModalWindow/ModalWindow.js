import PropTypes from "prop-types";
import ReactModal from "react-modal";

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const ModalWindow = ({ isOpen, children }) => {
  return (
      <ReactModal isOpen={isOpen} style={modalStyles}>
          {children}
    </ReactModal>
  );
};

ModalWindow.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}