import HooksCounterOne from "../components/UseEffect/HookCounterOne"
// import HookMouse from "./HookMouse"
import MouseContainer from "../components/UseEffect/MouseContainer"
import IntervalHookCounter from "../components/UseEffect/IntervalHookCounter"

const UseEffect = () => {
	return (
		<div>
			<h3>Use Effect Hooks</h3>
			<HooksCounterOne />
			{/* <HookMouse /> */}
			<MouseContainer />
			<IntervalHookCounter />
		</div>
	)
}

export default UseEffect
