import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import UseState from "./components/UseState/UseState"

const App = () => {
	return (
		<Router>
			<h1>React Hooks </h1>
			<UseState />
			<Routes>
				<Route
					path="/"
					exact
					strict
					render={() => {
						return <p> Welcome home</p>
					}}
				/>
			</Routes>
		</Router>
	)
}

export default App
