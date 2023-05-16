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
		<div className="container">
			<h4>Data Fetching</h4>
			<p>Fetch 100 posts from API</p>
			<ol>
				{posts.map(post => (
					<li key={post.id}> {post.title} </li>
				))}
			</ol>
		</div>
	)
}

export default DataFetching
