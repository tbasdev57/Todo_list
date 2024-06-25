import { useContext, useState } from "react";
// import { TasksContext } from "../../Contexts/TasksContext";
import Button from "../../../Components/UI/Button/Button";
import TextareaField from "../../../Components/UI/Forms/TextareaField";
import TextField from "../../../Components/UI/Forms/TextField";
import PropTypes from 'prop-types';
import { addTask, editTask } from '../../../store/TasksSlice';
import { useDispatch } from 'react-redux';

const TaskForm = ({ closeModal, value, index }) => {

	const [ formValue, setFormValue ] = useState(value ? value : {
		title: '',
		description: '',
	});

	const [ invalidFields, setInvalidFields ] = useState([]);

	// const { addTask, editTask } = useContext(TasksContext);

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (invalidFields.length > 0) {
			alert('There are errors in the form.');
			return;
		}

		if (value && !isNaN(+index)) { // S'il y a une value en props => Modification
			dispatch(editTask({ task: formValue, taskIndex: index }));
		} else { // Sinon => Création
			dispatch(addTask(formValue));
		}

		closeModal();
	}

	const handleError = (error) => { // {name, error}
		
		const invalidFieldsCopy = [ ...invalidFields ];
		// On récupère l'index d'un éventuel champs invalide enregistré dans le tableau
		const invalidFieldIndex = invalidFieldsCopy.findIndex(field => field === error.name);

		if (error.error) { // Si une erreur est renvoyée
			
			if (invalidFieldIndex === -1) { // Si le champs n'est pas enregistré comme invalide, on l'ajoute au tableau
				setInvalidFields([ ...invalidFieldsCopy, error.name ]);
			}
			// Sinon, il est déjà enregistré, on ne fait rien

		} else { // Si aucune erreur n'est renvoyée

			if (invalidFieldIndex !== -1) { // Mais que le champs est enregistré comme invalide, on le supprime du tableau
				invalidFieldsCopy.splice(invalidFieldIndex, 1);
				setInvalidFields(invalidFieldsCopy);
			}
			// Si le champs n'est pas enregistré, on ne fait rien.

		}

	}

	return (
		<form onSubmit={ handleSubmit }>
			<TextField
				name='title'
				placeholder='New task title'
				label='Title'
				value={ formValue.title }
				onChange={ (value) => setFormValue({ ...formValue, title: value }) }
				validation={ {
					required: true,
					type: 'string',
					minLength: 2,
					maxLength: 25,
				} }
				onError={ handleError }
			/>
			<TextareaField
				name='description'
				placeholder='Write your description here...'
				label='Description'
				value={ formValue.description }
				onChange={ (value) => setFormValue({ ...formValue, description: value }) }
				validation={ {
					required: false,
					type: 'string',
					maxLength: 100,
				} }
				onError={ handleError }
			/>
			<Button type='submit'>Save</Button>
		</form>
	);
};

export default TaskForm;

TaskForm.propTypes = {
	closeModal: PropTypes.func.isRequired,
	value: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
	index: PropTypes.number,
};

TaskForm.defaultProps = {
	value: null,
	index: null,
};