import React from "react";
import PlusIcon from "../ui/icons/plus";
import InfoIcon from "../ui/icons/info";
import PlayIcon from "../ui/icons/play";
import { jumbotron } from "../../constants";
import { motion } from "framer-motion";

const Jumbotron = ({ onPlay }) => {
	return (
		<motion.div layoutId={`card-container-${jumbotron.id}`}>
			<motion.div layoutId={`card-image-container-${jumbotron.id}`}>
				<div className="flex flex-col items-center justify-end jumbotron-image h-64 relative rounded">
					<div className="overlay" />
					<div className="flex items-center justify-center z-10 w-full px-8 py-2">
						<div className="flex-none flex flex-col text-white justify-center items-center ">
							<PlusIcon />

							<span className="text-xs">Lista</span>
						</div>

						<div className="flex-1 flex items-center justify-center mx-2 px-8">
							<button
								className="bg-white rounded py-2 rounded-lg w-full flex items-center justify-between px-8"
								onClick={() => onPlay(jumbotron)}
							>
								{" "}
								<PlayIcon />
								<span>Riproduci</span>
							</button>
						</div>

						<div className="flex-none flex flex-col text-white justify-center items-center">
							<InfoIcon />
							<span className="text-xs">Info</span>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Jumbotron;
