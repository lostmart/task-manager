import ButtonComp from "./ButtonComp"

const ModalComp = () => {
	return (
		<div className="fixed w-full h-full inset-0 z-50 modal-backdrop p-3">
			<div className="w-full max-w-104 mx-auto my-8 bg-zinc-100">
				<header className="h-20 border-b text-4xl border-zinc-200 px-5 flex items-center text-zinc-700 relative">
					Confirm
				</header>
				<div className="p-5 min-h-48 flex items-center justify-center text-4xl text-zinc-700">
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
