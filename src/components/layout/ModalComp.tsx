import { FaXmark } from "react-icons/fa6"
import ButtonComp from "../ui/ButtonComp"
import { useContext, useEffect } from "react"
import ModalContext from "../../context/ModalContext"

const ModalComp: React.FC = () => {
	const { showModal, setShowModal } = useContext(ModalContext)
	const handleCrossClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation()
		setShowModal((prev: boolean) => {
			return !prev
		})
	}
	useEffect(() => {
		window.addEventListener("click", (e: MouseEvent) => {
			console.log("running anyway ...")

			if (e.target instanceof HTMLDivElement) {
				if (e.target.classList.contains("modal-backdrop")) {
					console.log("running the set modal")

					setShowModal((prev: boolean) => {
						return !prev
					})
				}
			}
		})
	})
	return (
		<div
			className={`fixed w-full h-full inset-0 z-50 modal-backdrop p-3 ${
				!showModal && "hidden"
			} `}
			role="dialog"
			aria-modal="true"
		>
			<div className="w-full max-w-2xl lg:max-w-104 mx-auto my-8 bg-zinc-100">
				<header className="h-20 border-b text-2xl md:text-3xl lg:text-4xl border-zinc-200 px-5 flex items-center justify-between text-zinc-700 relative">
					Confirm
					<span
						role="button"
						aria-label="Close modal"
						onClick={handleCrossClick}
					>
						<FaXmark />
					</span>
				</header>
				<div className="p-5 min-h-48 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl text-zinc-700">
					the body
				</div>
				<footer className="h-20 bg-zinc-200 px-5 flex gap-4 items-center justify-end">
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
