import { useContext, useState } from "react";
import { useSelector } from 'react-redux';
import Button from "../../Components/UI/Button/Button";
import Modal from "../../Components/UI/Modal/Modal";
import PageTitle from "../../Components/UI/PageTitle/PageTitle";
import TaskForm from "./components/TaskForm";
import style from './Tasks.module.css';
import TasksTable from "./components/TasksTable/TasksTable";

const Tasks = () => {

	const [ isNewTaskModalOpen, setIsNewTaskModalOpen ] = useState(false);

	// const { tasksData } = useContext(TasksContext);
	const tasksData = useSelector(state => state.tasks);

	return (
		<section className='container' style={{ position: 'relative' }}>
			<div className={style['tasks-header']}>
				<PageTitle count={ tasksData.count } title={ `Task${tasksData.count > 1 ? 's' : ''}` } />
				<Button onClick={ () => setIsNewTaskModalOpen(true) }>New Task</Button>
			</div>
			<TasksTable />
			<Modal isOpen={ isNewTaskModalOpen } setIsOpen={ setIsNewTaskModalOpen }>
				<TaskForm closeModal={ () => setIsNewTaskModalOpen(false) } />
			</Modal>
		</section>
	);
};

export default Tasks;