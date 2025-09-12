import { FaEye, FaPencil, FaTrash } from "react-icons/fa6"
import "./HelpMenuGroup.css"

export type MenuProps = {
	isVisible: boolean
	onMenuAction: (action: string) => void
	onClose: () => void
}

const HelpMenuGroup: React.FC<MenuProps> = ({
	isVisible,
	onMenuAction,
	onClose,
}) => {
	const handleMenuClick = (action: string, e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		onMenuAction(action)
		onClose()
	}

	if (!isVisible) return null

	return (
		<div className="absolute right-[1em] top-[3em]">
			<ul className="flex flex-col gap-2 bg-zinc-700 text-stone-400 w-[187px] relative z-10 py-2 px-4 link-group active">
				<li
					onClick={(e) => handleMenuClick("view", e)}
					className="flex justify-between w-full py-1 hover:text-white transition cursor-pointer"
					role="button"
				>
					View <FaEye />
				</li>
				<li
					onClick={(e) => handleMenuClick("edit", e)}
					className="flex justify-between w-full py-1 hover:text-white transition cursor-pointer"
					role="button"
				>
					Edit <FaPencil />
				</li>
				<li
					onClick={(e) => handleMenuClick("delete", e)}
					className="flex justify-between w-full py-1 hover:text-white transition cursor-pointer"
					role="button"
				>
					Delete <FaTrash />
				</li>
			</ul>
		</div>
	)
}

export default HelpMenuGroup
