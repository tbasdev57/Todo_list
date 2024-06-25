import style from './Button.module.css';

const Button = ({ type = 'button', variant = 'primary', onClick, children }) => {

	return (
		<button type={ type } onClick={ onClick } className={`${style.btn} ${style[variant]}`}>
			{ children }
		</button>
	);
};

export default Button;