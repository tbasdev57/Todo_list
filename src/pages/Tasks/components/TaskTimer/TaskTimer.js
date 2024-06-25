import Button from "../../../../Components/UI/Button/Button";
import style from './TaskTimer.module.css';
import useTimer from '../../../../Hooks/useTimer';
import { useContext, useEffect } from "react";
// import { TasksContext } from "../../../Contexts/TasksContext";
import { editTask } from '../../.././../store/TasksSlice';
import { useDispatch } from 'react-redux';
import { parseSecondsToHMS } from '../../../../utils/time';

const TaskTimer = ({ index, onCloseModal }) => {

	const { time, startTimer, stopTimer } = useTimer();

	// const { editTask } = useContext(TasksContext);
	const dispatch = useDispatch();

	useEffect(() => {
		startTimer();

		return () => {
			stopTimer();
		}
	}, []);

	const handleStopTimer = () => {
		const savedTime = stopTimer();
		dispatch(editTask({ taskIndex: index, task: { time: savedTime }}));
		onCloseModal();
	}

	return (
		<div className={ style['timer-container'] }>
			<p className={ style.timer }>{ parseSecondsToHMS(time) }</p>
			<Button onClick={ handleStopTimer }>Stop</Button>
		</div>
	);
};

export default TaskTimer;