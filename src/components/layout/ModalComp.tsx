import { FaXmark } from "react-icons/fa6"
import ButtonComp from "../ui/ButtonComp"
import { useContext, useEffect, useCallback } from "react"
import ModalContext from "../../context/ModalContext"

const ModalComp: React.FC = () => {
	const { modalData, setModalData } = useContext(ModalContext)

	// Memoized version of closeModal using useCallback
	const closeModal = useCallback(() => {
		setModalData((prev) => ({
			...prev,
			showModal: false,
		}))
	}, [setModalData])

	// Memoized version of handleCrossClick using useCallback
	const handleCrossClick = useCallback(() => {
		closeModal()
	}, [closeModal])

	// Toggle modal when clicking outside of modal content
	const toggleModal = useCallback(
		(e: MouseEvent) => {
			if (
				e.target instanceof HTMLDivElement &&
				e.target.classList.contains("modal-backdrop")
			) {
				closeModal()
			}
		},
		[closeModal]
	)

	// Close modal when the "Escape" key is pressed
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeModal()
			}
		},
		[closeModal]
	)

	// Add and clean up event listeners
	useEffect(() => {
		window.addEventListener("click", toggleModal)
		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("click", toggleModal)
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [toggleModal, handleKeyDown])

	return (
		<div
			className={`fixed w-full h-full inset-0 z-50 modal-backdrop p-3 ${
				!modalData?.showModal && "hidden"
			}`}
			role="dialog"
			aria-modal="true"
		>
			<div className="w-full max-w-2xl lg:max-w-xl mx-auto my-8 bg-zinc-100">
				<header className="h-20 border-b text-2xl md:text-3xl lg:text-4xl border-zinc-200 px-3 md:px-5 flex items-center justify-between text-zinc-700 relative">
					{modalData?.modalTitle}
					<button
						type="button"
						aria-label="Close modal"
						onClick={handleCrossClick}
					>
						<FaXmark />
					</button>
				</header>
				<div className="p-3 min-h-48 flex items-center justify-center text-2xl md:text-3xl md:p-5 lg:text-4xl text-zinc-700">
					{modalData?.bodyContent}
				</div>
				<footer className="h-20 bg-zinc-200 flex gap-4 items-center justify-end px-3 md:px-5">
					<ButtonComp
						text="Cancel"
						theme="neutral"
						onClick={handleCrossClick}
					/>
					<ButtonComp text="Send" onClick={() => true} />
				</footer>
			</div>
		</div>
	)
}

export default ModalComp
