import { useState, useEffect } from "react"
import axios from "axios"

const DataFetching = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then(res => {
				console.log(res)
				setPosts(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			<h4>Data Fetching</h4>
			<ul>
				{posts.map(post => (
					<li key={post.id}> {post.title} </li>
				))}
			</ul>
		</div>
	)
}

export default DataFetching