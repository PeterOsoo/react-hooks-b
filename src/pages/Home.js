import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			Home Page
			<nav>
				<ol>
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
					<li>
						{" "}
						<Link to="/use-reducer">Use Reducer hooks</Link>
					</li>
					<li>
						{" "}
						<Link to="/use-callback">Use Callback hook</Link>
					</li>
					<li>
						{" "}
						<Link to="/use-memo">Use Memo hook</Link>
					</li>
					<li>
						{" "}
						<Link to="/use-ref">Use Ref hook</Link>
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default Home
