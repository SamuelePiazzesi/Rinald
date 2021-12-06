import _ from "lodash";
import Card from "../card";

const List = ({ title, items, onSelect = () => {} }) => {
	return (
		<section className="my-6 relative">
			<h5 className="text-gray-300 font-medium mb-4">{title}</h5>
			<div className=" flex flex-nowrap overflow-x-auto no-scrollbar">
				{_.map(items, (item) => (
					<Card item={item} key={item.id} onSelect={() => onSelect(item)} />
				))}
			</div>
		</section>
	);
};

export default List;
