import PropTypes from "prop-types";

// METHOD-1 (destructure):-

// const Button = ({ color, text }) => {
// 	return (
// 		<button className="btn" style={{ backgroundColor: color }}>
// 			{text}
// 		</button>
// 	);
// };

// METHOD-2 :-
const Button = (props) => {
	return (
		<button
			className="btn"
			style={{ backgroundColor: props.color }}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue",
};

// for typechecking (debugging)
Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
