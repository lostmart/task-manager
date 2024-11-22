import React from "react"
import { themeStyles } from "../../styles"

interface BannerProps {
	text: string
	theme?: keyof typeof themeStyles // "primary" | "secondary" | "third" | "danger" | "neutral"
}

const h1Styles: React.CSSProperties = {
	maxWidth: "289px",
	textAlign: "center",
	margin: "auto",
	lineHeight: "38px",
}

const BannerComp: React.FC<BannerProps> = ({ text, theme = "primary" }) => {
	const { background, text: textColor } = themeStyles[theme]
	return (
		<header
			aria-label="Banner"
			className={`p-4 flex items-center justify-center min-h-32 ${background} ${textColor}`}
		>
			<h1 style={h1Styles} className="text-shadow text-5xl">
				{text}
			</h1>
		</header>
	)
}

export default BannerComp
