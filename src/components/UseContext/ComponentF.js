import { useContext } from "react"
import { ChannelContext, UserContext } from "../../pages/UseContext"

const ComponentF = () => {
	const user = useContext(UserContext)
	const channel = useContext(ChannelContext)

	return (
		<div>
			<h3>Component F</h3>
			<p> User - {user} </p>
			<p> Channel - {channel} </p>
		</div>
	)
}

export default ComponentF
