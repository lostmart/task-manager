import { createContext } from "react"

interface ModalContextProps {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextProps>({
	showModal: false,
	setShowModal: () => {
		console.warn("setShowModal not implemented")
	},
})

export default ModalContext
