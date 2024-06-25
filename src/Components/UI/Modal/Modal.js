import style from './Modal.module.css';
import Button from "../Button/Button";
import { createPortal } from 'react-dom';

const Modal = ({ title = 'Default Title', variant = 'primary', isOpen, setIsOpen, children }) => {

	return createPortal(
		isOpen && <div className={ style.overlay }>
			<div className={ style.modal }>
				<div className={ style['modal-header'] }>
					<h3 className={ style[`text-${variant}`] }>{ title }</h3>
					<Button variant="danger" onClick={ () => setIsOpen(false) }>Close</Button>
				</div>
				<div className={ style['modal-content'] }>
					{ children }
				</div>
			</div>
		</div>,
		document.body
	);
};

export default Modal;