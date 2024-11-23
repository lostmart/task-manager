import { FaXmark } from "react-icons/fa6"
import ButtonComp from "../ui/ButtonComp"
import { useContext, useEffect, useRef, useCallback } from "react"
import ModalContext from "../../context/modalContext"

const ModalComp: React.FC = () => {
	const { showModal, setShowModal } = useContext(ModalContext)
	console.log("Modal Context - showModal:", showModal)
	console.log("Modal Context - setShowModal:", setShowModal)

	// Memoize handleClick to avoid re-creating it on every render
	const handleClick = useCallback(() => {
		console.log("Setting showModal to false", showModal)
		setShowModal(false)
	}, [setShowModal, showModal])

	const modalRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleClick()
			}
		}

		if (showModal) {
			document.addEventListener("keydown", handleKeyDown)
		} else {
			document.removeEventListener("keydown", handleKeyDown)
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [showModal, handleClick])

	if (!showModal) {
		return null
	}
	return (
		<div
			ref={modalRef}
			className={`fixed w-full h-full inset-0 z-50 modal-backdrop p-3 ${
				!showModal && "hidden"
			} `}
			role="dialog"
			aria-modal="true"
			aria-hidden={!showModal}
		>
			<div className="w-full max-w-2xl lg:max-w-104 mx-auto my-8 bg-zinc-100">
				<header className="h-20 border-b text-2xl md:text-3xl lg:text-4xl border-zinc-200 px-5 flex items-center justify-between text-zinc-700 relative">
					Confirm
					<span role="button" aria-label="Close modal" onClick={handleClick}>
						<FaXmark />
					</span>
				</header>
				<div className="p-5 min-h-48 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl text-zinc-700">
					the body
				</div>
				<footer className="h-20 bg-zinc-200 px-5 flex gap-4 items-center justify-end">
					<ButtonComp text="Cancel" theme="neutral" onClick={() => true} />
					<ButtonComp text="Send" onClick={() => true} />
				</footer>
			</div>
		</div>
	)
}

export default ModalComp
