import React from "react"
import CounterOne from "../components/UseReducer/CounterOne"
import CounterTwo from "../components/UseReducer/CounterTwo"
import CounterThree from "../components/UseReducer/CounterThree"
import UseContext from "../components/UseReducer/UseContext"
import DataFetchingOne from "../components/UseReducer/DataFetchingOne"
import DataFetchingTwo from "../components/UseReducer/DataFetchingTwo"

const UseReducer = () => {
	return (
		<div>
			UseReducer Hooks
			<h3>UseReducer Hooks</h3>
			<CounterOne />
			<CounterTwo />
			<CounterThree />
			<UseContext />
			<DataFetchingOne />
			<DataFetchingTwo />
		</div>
	)
}

export default UseReducer
