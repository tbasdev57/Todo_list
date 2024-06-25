import { useState } from "react";

const useFieldError = () => {

	const [ error, setError ] = useState(null);

	const validateField = (value, { type, required, minLength, maxLength }) => {

		if (type && typeof value !== type) {
			setError(`The value must be a ${type}`);
		} else if (required && !value) {
			setError(`The field is required`);
		} else if (minLength && value.length < minLength) {
			setError(`The value must have at least ${minLength} characters`);
		} else if (maxLength && value.length > maxLength) {
			setError(`The value is limited to ${maxLength} characters`);
		} else {
			setError(null);
		}

	};

	return {
		error,
		validateField
	};

};

export default useFieldError;