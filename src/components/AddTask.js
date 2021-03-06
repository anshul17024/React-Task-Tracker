import { useState } from "react";

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState(""); // "" is the default value
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault(); // so it does not submit on reload

		if (!text) {
			alert("Please add task");
		}

		onAdd({ text, day, reminder });

		// resetting after filling form
		setText("");
		setDay("");
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input
					type="text"
					placeholder="Add Task"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Date and Time</label>
				<input
					type="text"
					placeholder="Add Date & Time"
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input
					type="checkbox"
					value={reminder}
					checked={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
