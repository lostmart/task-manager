import React, { useState } from "react"
import ErrorContext, { TyeType } from "../context/ErrorContext"

interface ErrorProviderProps {
	children: React.ReactNode
}

const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
	const [error, setError] = useState<string | null>(null)
	const [tip, setTip] = useState<string | null>(null)
	const [type, setType] = useState<TyeType>("other")

	return (
		<ErrorContext.Provider
			value={{
				error,
				setError,
				tip,
				setTip,
				type,
				setType,
			}}
		>
			{children}
		</ErrorContext.Provider>
	)
}

export default ErrorProvider
