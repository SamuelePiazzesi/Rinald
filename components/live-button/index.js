import React, { useCallback } from "react";
import { lives } from "../../constants";
import _ from 'lodash'

const LiveButton = ({ onClick }) => {
	const getItem = useCallback(() => {
		const date = new Date();
		const currentHour = date.getHours();
		let item = _.find(lives, (live) => live.id === "work");

		if (_.inRange(currentHour, 7) || _.inRange(currentHour, 19, 24)) {
			item = _.find(lives, (live) => live.id === "off");
		}

		if (_.inRange(currentHour, 7, 10)) {
			item = _.find(lives, (live) => live.id === "break");
		}

		if (_.inRange(currentHour, 13, 14)) {
			item = _.find(lives, (live) => live.id === "lunch");
		}

		return item;
	}, []);

	
	return (
		<div
			className="cursor-pointer fixed bottom-4 md:bottom-6 right-2 md:right-8"
			onClick={() => onClick(getItem)}
		>
			<div className="w-12 md:w-16 h-12 md:h-16 live-image relative rounded-full">
				<div className="w-3 md:w-4 h-3 md:h-4 bg-green-400 absolute rounded-full right-1"></div>
				<div className="text-xs uppercase font-bold w-full bg-red text-white flex justify-center items-center text-center absolute rounded-2xl -bottom-1">
					Live
				</div>
			</div>
		</div>
	);
};

export default LiveButton;
