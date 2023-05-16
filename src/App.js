import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import UseState from "./pages/UseState"
import UseEffect from "./pages/UseEffect"
import UseContext from "./pages/UseContext"

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
			</Routes>
		</>
	)
}

export default App
