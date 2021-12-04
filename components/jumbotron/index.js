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
				<div className="flex flex-col justify-end items-start jumbotron-image h-56 md:h-64 lg:h-96 relative rounded">
					<div className="overlay" />
					<div className="flex flex-col z-10 w-full px-4 md:px-8 py-2">
						<h2 className="flex flex-col items-start text-white uppercase font-extrabold text-md md:text-5xl mb-4 md:mb-8">
							Su di Me
						</h2>

						<p className="text-white w-36 md:w-96 mb-4 md:mb-8 text-xs md:text-xl">
							Direttore Creativo in un’azienda che si occupa di Lead Generation.
							Scopri di più su di me, scegli un titolo!
						</p>

						<button
							className="bg-white py-2 rounded-sm w-36 lg:w-48 flex items-center justify-center mb-4 md:mb-8"
							onClick={() => onPlay(jumbotron)}
						>
							{" "}
							<PlayIcon />
							<span className="ml-2 font-bold">Riproduci</span>
						</button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Jumbotron;
