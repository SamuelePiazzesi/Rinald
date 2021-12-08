import { motion } from "framer-motion";
import { useMemo } from "react";
import ReactPlayer from "react-player";
import { useTime } from "react-timer-hook";
import CloseIcon from "../ui/icons/close";
import MailIcon from "../ui/icons/mail";

const Item = ({ item, onClose }) => {
	const { id, description, title } = item;
	const { seconds, minutes, hours } = useTime({});
	const isLiveItem = title === "Live";

	const getLiveCatchPhrase = useMemo(() => {
		return _.sample(description);
	}, []);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.15 } }}
				transition={{ duration: 0.2, delay: 0.15 }}
				style={{ pointerEvents: "auto" }}
				className="detail-overlay z-20"
			></motion.div>
			<div className="card-content-container open">
				<motion.div className="card-content" layoutId={`card-container-${id}`}>
					<button
						className="absolute h-10 w-10 flex justify-center bg-opacity-75 items-center full-rounded bg-white shadow-2xl right-2 top-2 rounded-full z-50 pointer-events-auto"
						onClick={() => onClose()}
					>
						<CloseIcon />
					</button>
					<motion.div
						className="card-image-container"
						layoutId={`card-image-container-${id}`}
					>
						<div className="w-full h-60 md:h-96 relative background-image">
							{isLiveItem && (
								<div className="absolute font-bold text-sm text-white top-3 left-4">
									{hours < 10 && "0"}
									{hours}:{minutes < 10 && "0"}
									{minutes}:{seconds < 10 && "0"}
									{seconds}
								</div>
							)}
							<ReactPlayer
								width="100%"
								height="100%"
								controls={!isLiveItem}
								loop={isLiveItem}
								playing
								style={{ pointerEvents: "auto" }}
								url={item.video}
								light={item.image}
							/>
						</div>
					</motion.div>

					<motion.div
						className="content-container"
						className="pt-64 md:pt-96 p-4"
						animate
					>
						<div className="uppercase text-xs text-gray-300 font-extrabold mb-4 mt-2 md:mt-4">
							{title}
						</div>

						<div className="mb-8 text-gray-300 max-h-64 md:max-h-72 text-justify overflow-scroll  pointer-events-auto">
							{isLiveItem ? getLiveCatchPhrase : description}
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="my-2  text-gray-200 font-black text-xs text-center">
								Se vuoi contattarmi scrivimi una mail
							</p>

							<a
								href="mailto:hello@rinaldsefa.com"
								className="py-2 px-4 bg-yellow-300 text-black font-semibold rounded-md pointer-events-auto"
							>
								<div className="flex justify-between text-xs md:text-base">
									<MailIcon />{" "}
									<span className="ml-2 ">hello@rinaldsefa.com</span>
								</div>
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Item;
