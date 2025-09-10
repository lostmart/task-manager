import React, { useState } from "react"
import ErrorContext, { IErrorContent } from "../context/ErrorContext"

interface ErrorProviderProps {
	children: React.ReactNode
}

const emptyErrorData: IErrorContent = {
	message: "",
	type: null,
	confirmFn: () => true,
}

const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
	const [errorData, setErrorData] = useState(emptyErrorData)

	return (
		<ErrorContext.Provider value={{ errorData, setErrorData }}>
			{children}
		</ErrorContext.Provider>
	)
}

export default ErrorProvider
