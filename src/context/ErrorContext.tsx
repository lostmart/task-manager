import { createContext } from "react"

export type ErrorType = "validation" | "auth" | "network" | "other"

export interface IErrorContent {
	message: string | React.ReactNode // Accepts either a string or a react node
	code?: number
	tip: string
	type: ErrorType
}

interface IErrorContentProps {
	error: IErrorContent | null
	setError: React.Dispatch<React.SetStateAction<IErrorContent | null>>
}

const ErrorContext = createContext<IErrorContentProps>({
	error: null,
	setError: (prev) => {
		return {
			...prev,
		}
	},
})

export default ErrorContext
