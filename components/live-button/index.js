import React from "react";

const LiveButton = () => {
	return (
		<button className="fixed flex items-center justify-center bg-white bottom-4 right-2 rounded-full py-1 px-4 border-2 border-red">
			<span className="font-semibold mr-1">LIVE</span>
			<div className="rounded-full w-4 h-4 bg-red"></div>
		</button>
	);
};

export default LiveButton;
