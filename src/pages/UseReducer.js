import React from "react"
import CounterOne from "../components/UseReducer/CounterOne"
import CounterTwo from "../components/UseReducer/CounterTwo"
import CounterThree from "../components/UseReducer/CounterThree"
import UseContext from "../components/UseReducer/UseContext"

const UseReducer = () => {
	return (
		<div>
			UseReducer Hooks
			<h3>UseReducer Hooks</h3>
			<CounterOne />
			<CounterTwo />
			<CounterThree />
			<UseContext />
		</div>
	)
}

export default UseReducer
