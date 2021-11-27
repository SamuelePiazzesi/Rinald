import { motion } from "framer-motion";

const Card = ({ item, onSelect }) => {
	return (
		<motion.div
			layoutId={`card-container-${item.id}`}
			className="w-64 md:w-96 h-36 md:h-48 mr-6 flex flex-nowrap bg-gray-400 flex-none rounded-2xl relative cursor-pointer overflow-hidden"
			onClick={() => onSelect()}
		>
			<motion.div
				whileHover={{
					scale: 1.2,
					transition: { duration: 0.3, stiffness: 300 },
				}}
				className="rounded-2xl background-image h-full w-full"
				style={{ backgroundImage: `url('${item.image}')` }}
				layoutId={`card-image-container-${item.id}`}
			/>
		</motion.div>
	);
};

export default Card;
