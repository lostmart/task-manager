import { FaXmark } from "react-icons/fa6"
import ButtonComp from "../ui/ButtonComp"

interface ModalProps {
	show: boolean
}

const ModalComp: React.FC<ModalProps> = ({ show }) => {
	return (
		<div
			className={`fixed w-full h-full inset-0 z-50 modal-backdrop p-3 ${
				!show && "hidden"
			} `}
		>
			<div className="w-full max-w-2xl lg:max-w-104 mx-auto my-8 bg-zinc-100">
				<header className="h-20 border-b text-2xl md:text-3xl lg:text-4xl border-zinc-200 px-5 flex items-center justify-between text-zinc-700 relative">
					Confirm
					<span>
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
