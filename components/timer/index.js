import React from "react";
import { useTime } from "react-timer-hook";

const Timer = () => {
	const { seconds, minutes, hours } = useTime({});
	return (
		<div className="absolute font-bold text-sm text-white top-3 left-4">
			{hours < 10 && "0"}
			{hours}:{minutes < 10 && "0"}
			{minutes}:{seconds < 10 && "0"}
			{seconds}
		</div>
	);
};

export default Timer;
