/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";


const FoodDisplay = ({category}) => {

	// eslint-disable-next-line no-unused-vars
	const { food_list } = useContext(StoreContext);
	return (
		<div className="food-display" id="food-display">
			<h2>Top Dishes Near You</h2>
			<div className="food-display-list"> 

			{food_list.map((item, index) => {
				if (category === "All" || category === item.category) {
					return (
						<Fooditem 
						key={index}
						id = {item._id}
						name = {item.name}
						image = {item.image}
						price = {item.price}
						description = {item.description}
						/>
					)
				}
				// return (
				// 	<Fooditem 
				// 	key={index}
				// 	id = {item._id}
				// 	name = {item.name}
				// 	image = {item.image}
				// 	price = {item.price}
				// 	description = {item.description}
				// 	/>
				// )
			})}
		
			</div>
			
		</div>
	)
}

export default FoodDisplay