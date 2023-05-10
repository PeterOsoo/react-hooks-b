import HooksCounterOne from "../components/UseEffect/HookCounterOne"
// import HookMouse from "./HookMouse"
import MouseContainer from "../components/UseEffect/MouseContainer"
import IntervalHookCounter from "../components/UseEffect/IntervalHookCounter"
import IntervalHookCounterTwo from "../components/UseEffect/IntervalHookCounterTwo"
import DataFetching from "../components/UseEffect/DataFetching"
import DataFetchingTwo from "../components/UseEffect/DataFetchingTwo"

const UseEffect = () => {
	return (
		<div>
			<h3>Use Effect Hooks</h3>
			<HooksCounterOne />
			{/* <HookMouse /> */}
			<MouseContainer />
			<IntervalHookCounter />
			<IntervalHookCounterTwo />
			<DataFetching />
			<DataFetchingTwo />
		</div>
	)
}

export default UseEffect
