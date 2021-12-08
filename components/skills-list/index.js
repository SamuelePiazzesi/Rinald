import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { skillsList } from "../../constants";
import SkillPill from "./pill";
import _ from "lodash";

const SkillsList = ({}) => {
	const originOffset = useRef({ top: 0, left: 0 });
	const controls = useAnimation();

	useEffect(() => {
		controls.start("visible");
	}, []);

	const randomPill = _.random(4, skillsList.length);

	return (
		<motion.div
			initial="hidden"
			className="w-full flex flex-wrap justify-center items-center"
			animate={controls}
			variants={{}}
		>
			{_.map(_.shuffle(skillsList), (i, index) => (
				<SkillPill
					key={i.title}
					i={index}
					originIndex={randomPill}
					originOffset={originOffset}
					skill={i}
				/>
			))}
		</motion.div>
	);
};

export default SkillsList;
