import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
	return (
		<div>
			<header className="header">
				<h1>{title}</h1>
				<Button
					text={showAddTask ? "Close" : "Add"}
					color={showAddTask ? "red" : "green"}
					onClick={onAdd}
				/>
			</header>
		</div>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

// CSS in React:-
// <h1 style = {headingStyle}> { title } </h1>
const headingStyle = {
	color: "red",
	backgroundColor: "black",
};

export default Header;
