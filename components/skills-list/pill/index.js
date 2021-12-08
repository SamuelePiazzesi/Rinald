import React, { useLayoutEffect, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { skillsList } from "../../../constants";

const SkillPill = ({ i, originIndex, originOffset, skill }) => {
	const { title, premium } = skill;
	const delayRef = useRef(0);
	const offset = useRef({
		top: 0,
		left: 0,
	});
	const ref = useRef();

	const itemVariants = {
		hidden: {
			opacity: 0,
			scale: 0.5,
		},
		visible: (delayRef) => ({
			opacity: 1,
			scale: 1,
			transition: { delay: delayRef.current },
		}),
	};

	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;

		offset.current = {
			top: element.offsetTop,
			left: element.offsetLeft,
		};

		if (i === originIndex) {
			originOffset.current = offset.current;
		}
	}, []);

	useEffect(() => {
		const dx = Math.abs(offset.current.left - originOffset.current.left);
		const dy = Math.abs(offset.current.top - originOffset.current.top);
		const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
		delayRef.current = d * 0.007;
	}, []);

	return (
		<motion.div
			className={`
			bg-transparent  m-1 md:m-2
		text-white flex items-center
			${
				premium
					? "font-semibold text-purple-400 border-2 border-purple-400"
					: " border-2 border-white"
			} px-2 sm:py-1 md:px-4 justify-center
			text-center text-xs md:text-sm rounded-full`}
			ref={ref}
			variants={itemVariants}
			custom={delayRef}
		>
			{title}
		</motion.div>
	);
};

export default SkillPill;
