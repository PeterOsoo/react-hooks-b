import { useState } from "react"

const HookCounterFour = () => {
	const [items, setItems] = useState([])

	const addItem = () => {
		// console.log("Add item")
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		])
	}
	return (
		<div>
			<h4>useState with array</h4>
			<button onClick={addItem}>Add a number</button>

			<ul>
				{items.map(item => (
					<li key={item.id}> {item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour
