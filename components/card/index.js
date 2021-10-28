import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

const Card = ({ item, onSelect }) => {
	return (
		<motion.div
			layoutId={`card-container-${item.id}`}
			className=" w-64 h-36 mr-6 flex flex-nowrap bg-gray-400 flex-none rounded-2xl relative"
			onClick={() => onSelect()}
		>
			<motion.div
				className="absolute top-0 left-0 rounded-2xl background-image h-full w-full"
				style={{ backgroundImage: `url('${item.image}')` }}
				layoutId={`card-image-container-${item.id}`}
			/>
		</motion.div>
	);
};

export default Card;
