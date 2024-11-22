import React from "react"
import { themeStyles } from "../../styles"

interface ButtonProps {
	text: string
	onClick: () => void
	theme?: keyof typeof themeStyles // "primary" | "secondary" | "third" | "danger" | "neutral"
}

const ButtonComp: React.FC<ButtonProps> = ({
	text,
	onClick,
	theme = "primary",
}) => {
	const { background, text: textColor } = themeStyles[theme]

	const handleClick = () => {
		onClick()
	}

	return (
		<button
			className={`h-12 w-48 text-shadow ${background} ${textColor}`}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}

export default ButtonComp
