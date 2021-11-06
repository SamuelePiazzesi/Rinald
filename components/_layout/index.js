import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Header from "./header";

const Layout = ({ children }) => {
	const variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	};

	const [visibleVideo, setVisibleVideo] = useState(true);
	const [startAnimation, setStartAnimation] = useState(false);
	const videoAnimation = useAnimation();
	const homeAnimation = useAnimation();

	const animationSequence = async () => {
		await videoAnimation.start({
			opacity: 0,
			transition: { duration: 1.5 },
		});
		return await homeAnimation.start({
			opacity: 1,
			transition: { duration: 1.5 },
		});
	};

	useEffect(() => {
		if (startAnimation) {
			animationSequence();
		}
	}, [startAnimation]);

	return (
		<div className="bg-black w-full h-screen">
			<motion.div animate={homeAnimation} initial="hidden" variants={variants}>
				<Header />
				<main className="h-screen relative py-32 px-2">{children}</main>
			</motion.div>
			{visibleVideo && (
				<motion.div
					animate={videoAnimation}
					variants={variants}
					className="absolute top-0 bottom-0 left-0 right-0"
				>
					<ReactPlayer
						width="100%"
						height="100%"
						playing
						onProgress={(info) => {
							if (info.playedSeconds > 3) {
								setStartAnimation(true);
							}
						}}
						onEnded={() => {
							setVisibleVideo(false);
						}}
						muted
						url="/videos/intro-vertical.mp4"
					/>
				</motion.div>
			)}
		</div>
	);
};

export default Layout;
