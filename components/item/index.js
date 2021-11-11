import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import MailIcon from "../ui/icons/mail";
import PhoneIcon from "../ui/icons/phone";

const Item = ({ item, onClose }) => {
	const { id, description, subtitle } = item;

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
						<div className="w-full h-60 md:h-72 lg:h-96 relative background-image">
							<ReactPlayer
								width="100%"
								height="100%"
								controls
								playing
								style={{ pointerEvents: "auto" }}
								url={item.video}
								light={item.image}
							/>
						</div>
					</motion.div>

					<motion.div
						className="content-container"
						className="pt-64 md:pt-80 lg:pt-96  px-8"
						animate
					>
						<span className="uppercase text-xs md:text-sm text-gray-300 font-extrabold mb-4 mt-8">
							{subtitle}
						</span>
						<p className="my-4 text-gray-300 max-h-44  md:max-h-64 overflow-scroll text-xs sm:text-base pointer-events-auto">
							{description}
						</p>

						<div className="flex flex-col	justify-center items-center">
							<p className="my-4 text-gray-200 font-black text-xs md:text-base">
								Se vuoi contattarmi scrivimi una mail
							</p>

							<a
								href="mailto:rinaldsefa@msn.com"
								className="py-2 px-4 bg-yellow-300 text-black font-semibold rounded-md pointer-events-auto"
							>
								<div className="flex justify-between text-xs sm:text-base">
									<MailIcon /> <span className="ml-2 ">rinaldsefa@msn.com</span>
								</div>
							</a>

							<p className="my-4 text-gray-200 font-black text-xs  md:text-base">
								Oppure chiamami
							</p>

							<a
								href="tel:+39388 116 5973"
								className=" bg-green-500 text-white font-semibold rounded-full h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center pointer-events-auto"
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
