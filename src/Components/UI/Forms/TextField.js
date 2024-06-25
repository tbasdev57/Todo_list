import { useEffect, useId } from 'react';
import useFieldError from '../../../Hooks/useFieldError';
import style from './Field.module.css';

const TextField = ({ label, name, placeholder, validation, value, onChange, onError }) => {

	const id = useId();

	const { error, validateField } = useFieldError();

	const handleChange = (event) => {
		const { value } = event.target;
		onChange(value);
	}

	useEffect(() => {
		validateField(value, validation);
	}, [ value ]);

	useEffect(() => {
		onError({ name, error });
	}, [ error, name ]);

	return (
		<div className={ style['input-group'] }>
			<label htmlFor={ id }>{ label }</label>
			<input type="text" name={ name } className={ style.input } placeholder={ placeholder } value={ value } onChange={ handleChange } />
			{ error && <p className={ style.error }>{ error }</p> }
		</div>
	);
};

export default TextField;