import React, { useState, useEffect } from "react"
import axios from "axios"

const DataFetchingOne = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const [post, setPost] = useState({})

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/72`)
			.then(response => {
				setLoading(false)
				setPost(response.data)
				setError("")
			})
			.catch(error => {
				setLoading(false)
				setPost({})
				setError("Something went wrong!!!")
			})
	}, [])

	return (
		<div>
			<h4>Data Fetching</h4>
			<p>{loading ? "Loading..." : post.title}</p>
			<p>{error ? error : null}</p>
		</div>
	)
}

export default DataFetchingOne
