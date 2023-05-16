import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			Home Page
			<nav>
				<ul>
					<li>
						{" "}
						<Link to="/use-state">Use State hooks</Link>
					</li>
					<li>
						{" "}
						<Link to="/use-effect">Use Effect hooks</Link>
					</li>
					<li>
						{" "}
						<Link to="/use-context">Use Context hooks</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Home
