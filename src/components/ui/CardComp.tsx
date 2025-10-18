import { FaEllipsisVertical } from "react-icons/fa6"
import HelpMenuGroup from "../layout/HelpMenuGroup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export type CardProps = {
	onCardClick: () => void
	title: string
	description: string
	cardId: number | string
	helpMenuGroup?: boolean
}

const CardComp = ({
	onCardClick,
	title,
	description,
	cardId,
	helpMenuGroup = false,
}: CardProps) => {
	const navigate = useNavigate()

	const handleMenuAction = (action: string, cardId: number | string) => {
		console.log(`${action} clicked for project:`, cardId)
		setActiveMenuId(null) // Close menu after action
		if (action === "view") return navigate(`/projects/${cardId}`)
		// if (action === "edit") return navigate(`/projects/${cardId}/edit`)
	}

	const [activeMenuId, setActiveMenuId] = useState<number | string | null>(null)

	const handleMenuToggle = (cardId: number | string, e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setActiveMenuId(activeMenuId === cardId ? null : cardId)
	}

	return (
		<article
			onClick={onCardClick}
			className="flex flex-col items-center p-4 bg-slate-100 mt-2 cursor-pointer relative hover:bg-slate-200 transition-colors"
		>
			<h2 className="flex justify-between w-full">
				<span>{title}</span>
				{helpMenuGroup && (
					<button
						className="p-2 bg-slate-100 hover:bg-slate-300 rounded"
						onClick={(e) => handleMenuToggle(cardId, e)}
					>
						<FaEllipsisVertical />
					</button>
				)}
			</h2>
			<HelpMenuGroup
				isVisible={activeMenuId === cardId}
				onMenuAction={(action) => handleMenuAction(action, cardId)}
				onClose={() => setActiveMenuId(null)}
			/>
			<p className="text-gray-600">{description}</p>
		</article>
	)
}

export default CardComp
