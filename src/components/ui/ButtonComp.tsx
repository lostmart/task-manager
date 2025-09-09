import React from "react"
import { themeStyles } from "../../styles"

type ButtonType = "button" | "submit" | "reset"

interface ButtonProps {
	text: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	theme?: keyof typeof themeStyles // "primary" | "secondary" | "third" | "danger" | "neutral"
	type?: ButtonType
}

const ButtonComp: React.FC<ButtonProps> = ({
	text,
	onClick,
	type = "button",

	theme = "primary",
}) => {
	const { background, text: textColor } = themeStyles[theme]

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault() // Prevent form submission
		onClick?.(e) // Optional chaining since onClick is now optional
	}

	return (
		<button
			type={type}
			className={`h-12 w-48 text-shadow ${background} ${textColor}`}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}

export default ButtonComp
