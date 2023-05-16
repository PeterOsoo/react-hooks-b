import React from "react"
import ComponentC from "../components/UseContext/ComponentC"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const useContext = () => {
	return (
		<div>
			<UserContext.Provider value={"Rateng"}>
				<ChannelContext.Provider value={"Ondiek"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default useContext
