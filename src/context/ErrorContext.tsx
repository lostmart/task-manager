// ErrorContext.tsx
import { createContext } from "react"

export type ErrorType = "validation" | "auth" | "network" | "other" | null

export interface IErrorContent {
	message: string | React.ReactNode
	code?: number
	tip?: string
	type: ErrorType
	confirmFn: () => void
}

interface IErrorContentProps {
	errorData: IErrorContent | null
	setErrorData: React.Dispatch<React.SetStateAction<IErrorContent>> // Changed from setError to setErrorData
}

const ErrorContext = createContext<IErrorContentProps>({
	errorData: null,
	setErrorData: (prev) => {
		return {
			...prev,
		}
	},
})

export default ErrorContext