import { useState, useEffect } from "react"
import axios from "axios"

const DataFetching = () => {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
				console.log(res)
				setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
		<div>
			<h4>Data Fetching Two</h4>
			<p>Fetch individual on Button Click</p>
			<input
				type="text"
				name=""
				value={id}
				id=""
				onChange={e => setId(e.target.value)}
			/>
			<br /> <br />
			<button type="button" onClick={handleClick}>
				Fetch Post
			</button>
			<p> {post.title} </p>
		</div>
	)
}

export default DataFetching
