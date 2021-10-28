import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import MailIcon from "../ui/icons/mail";
import PhoneIcon from "../ui/icons/phone";

const Item = ({ item, onClose }) => {
	const { id, description, title } = item;

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.15 } }}
				transition={{ duration: 0.2, delay: 0.15 }}
				style={{ pointerEvents: "auto" }}
				className="detail-overlay z-20"
				onClick={() => onClose()}
			></motion.div>
			<div className="card-content-container open">
				<motion.div className="card-content" layoutId={`card-container-${id}`}>
					<motion.div
						className="card-image-container"
						layoutId={`card-image-container-${id}`}
					>
						<div className="w-full h-60 relative background-image">
							<ReactPlayer
								width="100%"
								height="100%"
								controls
								playing
								style={{ pointerEvents: "auto" }}
								url={item.video}
								light={item.image}
							/>
							<div className="overlay" />
						</div>
					</motion.div>

					<motion.div className="content-container" animate>
						<span className="uppercase text-sm text-gray-300 font-extrabold mb-4">
							{item.subtitle}
						</span>
						<p className="my-4 text-gray-300 max-h-60 overflow-scroll pointer-events-auto">
							{item.description}
						</p>

						<div className="flex flex-col	justify-center items-center">
							<p className="my-4 text-gray-200 font-black text-xs">
								Se vuoi contattarmi scrivimi una mail
							</p>

							<a
								href="mailto:test@email.com"
								className="py-2 px-4 bg-yellow-300 text-black font-semibold rounded-md"
							>
								<div className="flex justify-between">
									<MailIcon /> <span className="ml-2">rinaldsefa@msn.com</span>
								</div>
							</a>

							<p className="my-4 text-gray-200 font-black text-xs">
								Oppure chiamami
							</p>

							<a
								href="mailto:test@email.com"
								className=" bg-green-500	 text-white font-semibold rounded-full h-16 w-16 flex items-center justify-center"
							>
								<PhoneIcon />
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Item;
