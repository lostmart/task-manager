import { FaEllipsisVertical } from "react-icons/fa6"
import HelpMenuGroup from "../layout/HelpMenuGroup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export type CardProps = {
	onCardClick: () => void
	projectName: string
	description: string
	projectId: number | string
}

const CardComp = ({
	onCardClick,
	projectName,
	description,
	projectId,
}: CardProps) => {
	const navigate = useNavigate()

	const handleMenuAction = (action: string, projectId: number | string) => {
		console.log(`${action} clicked for project:`, projectId)
		setActiveMenuId(null) // Close menu after action
		if (action === "view") return navigate(`/projects/${projectId}`)
		// if (action === "edit") return navigate(`/projects/${projectId}/edit`)
	}

	const [activeMenuId, setActiveMenuId] = useState<number | string | null>(null)

	const handleMenuToggle = (
		projectId: number | string,
		e: React.MouseEvent
	) => {
		e.preventDefault()
		e.stopPropagation()
		setActiveMenuId(activeMenuId === projectId ? null : projectId)
	}

	return (
		<article
			onClick={onCardClick}
			className="flex flex-col items-center p-4 bg-slate-100 mt-2 cursor-pointer relative hover:bg-slate-200 transition-colors"
		>
			<h2 className="flex justify-between w-full">
				<span>{projectName}</span>
				<button
					className="p-2 bg-slate-100 hover:bg-slate-300 rounded"
					onClick={(e) => handleMenuToggle(projectId, e)}
				>
					<FaEllipsisVertical />
				</button>
			</h2>
			<HelpMenuGroup
				isVisible={activeMenuId === projectId}
				onMenuAction={(action) => handleMenuAction(action, projectId)}
				onClose={() => setActiveMenuId(null)}
			/>
			<p className="text-gray-600">{description}</p>
		</article>
	)
}

export default CardComp
