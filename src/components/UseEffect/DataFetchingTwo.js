import { useState, useEffect } from "react"
import axios from "axios"

const DataFetching = () => {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				console.log(res)
				setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [id])

	return (
		<div>
			<h4>Data Fetching Two</h4>
			<p>Fetch individual post by passing ID</p>
			<input
				type="text"
				name=""
				value={id}
				id=""
				onChange={e => setId(e.target.value)}
			/>

			<p> {post.title} </p>
		</div>
	)
}

export default DataFetching
