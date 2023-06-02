import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import UseState from "./pages/UseState"
import UseEffect from "./pages/UseEffect"
import UseContext from "./pages/UseContext"
import UseReducer from "./pages/UseReducer"
import UseCallBack from "./pages/UseCallBack"
import UseMemo from "./pages/UseMemo"
import UseRef from "./pages/UseRef"
import CustomHooks from "./pages/CustomHooks"

const App = () => {
	return (
		<>
			<h1>React Hooks </h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/use-state" element={<UseState />} />
				<Route path="/use-effect" element={<UseEffect />} />
				<Route path="/use-context" element={<UseContext />} />
				<Route path="/use-reducer" element={<UseReducer />} />
				<Route path="/use-callback" element={<UseCallBack />} />
				<Route path="/use-memo" element={<UseMemo />} />
				<Route path="/use-ref" element={<UseRef />} />
				<Route path="/custom-hooks" element={<CustomHooks />} />
			</Routes>
		</>
	)
}

export default App
