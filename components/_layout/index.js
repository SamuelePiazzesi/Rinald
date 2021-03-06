import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useWindowSize } from "../../hooks/window-size";
import Notifications from "../notifications";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ disableOverflow = false, children }) => {
	const variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	};

	const size = useWindowSize();
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
		<>
			<div
				className={`bg-black w-full ${
					visibleVideo || disableOverflow
						? "h-screen overflow-y-hidden fixed"
						: ""
				}`}
			>
				<motion.div
					animate={homeAnimation}
					initial="hidden"
					variants={variants}
				>
					<Header />
					<Notifications />
					<main className="relative pt-24  md:pt-32 pb-8 md:pb-12 px-4 lg:max-w-5xl m-auto">
						{children}
					</main>
					<Footer />
				</motion.div>
				{visibleVideo && (
					<motion.div
						animate={videoAnimation}
						variants={variants}
						className="absolute top-0 bottom-0 left-0 right-0 h-screen"
					>
						<ReactPlayer
							width="100%"
							height="100%"
							playsinline
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
							url={
								size.width > 568
									? "/videos/intro.mp4"
									: "/videos/intro-vertical.mp4"
							}
						/>
					</motion.div>
				)}
			</div>
		</>
	);
};

export default Layout;
