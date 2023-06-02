import React from "react"
import DocTitleOne from "../components/CustomHooks/DocTitleOne"
import DocTitleTwo from "../components/CustomHooks/DocTitleTwo"
import CounterOne from "../components/CustomHooks/CounterOne"
import CounterTwo from "../components/CustomHooks/CounterTwo"

const CustomHooks = () => {
	return (
		<div>
			<h2>Custom Hooks</h2>
			<h4>useDocument Title Hook</h4>
			<DocTitleOne />
			<br />
			<DocTitleTwo />

			<h4>useCounter Hook</h4>
			<CounterOne />
			<CounterTwo />
		</div>
	)
}

export default CustomHooks
