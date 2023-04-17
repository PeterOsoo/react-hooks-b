import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"

import UseState from "./components/UseState/UseState"
import About from "./pages/About"
import Home from "./pages/Home"
import UseEffect from "./components/UseEffect/UseEffect"

const App = () => {
	return (
		<>
			<h1>React Hooks </h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/use-state" element={<UseState />} />
				<Route path="/use-effect" element={<UseEffect />} />
			</Routes>
		</>
	)
}

export default App
