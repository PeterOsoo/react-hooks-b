import { useState } from "react"

const HookCounterThree = () => {
	const [name, setName] = useState({ firstName: "", lastName: "" })

	return (
		<div>
			<h4>useState with object</h4>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>

			<p>First Name is : {name.firstName} </p>
			<p>Last Name is : {name.lastName} </p>

			{/* Stringify  */}
			<p> JSON.stringify {JSON.stringify(name)} </p>
		</div>
	)
}

export default HookCounterThree
