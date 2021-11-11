import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import Item from "../components/item";
import Jumbotron from "../components/jumbotron";
import List from "../components/list";
import Layout from "../components/_layout";
import { experiences, skills, studies } from "../constants";

const Home = () => {
	const [selectedVideo, setSelectedVideo] = useState();

	return (
		<Layout>
			<AnimateSharedLayout type="crossfade">
				<Jumbotron onPlay={(item) => setSelectedVideo(item)} />

				<AnimatePresence>
					{selectedVideo && (
						<Item item={selectedVideo} onClose={() => setSelectedVideo()} />
					)}
				</AnimatePresence>

				<List
					title="I miei studi"
					items={studies}
					onSelect={(item) => setSelectedVideo(item)}
				/>

				<List
					title="Le mie esperienze"
					items={experiences}
					onSelect={(item) => setSelectedVideo(item)}
				/>

				<List
					title="Le mie skill"
					items={skills}
					onSelect={(item) => setSelectedVideo(item)}
				/>
			</AnimateSharedLayout>
		</Layout>
	);
};

export default Home;
