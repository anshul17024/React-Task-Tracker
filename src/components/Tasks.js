import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
	// the array on RHS is 'tasks'
	return (
		<>
			{tasks.map((task) => (
				// <h3 key={task.id}>{task.text}</h3>
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</>
	);
};

export default Tasks;
