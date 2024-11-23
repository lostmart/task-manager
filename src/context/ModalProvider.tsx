import { ReactNode, useState } from "react"
import ModalContext from "./modalContext"

interface ModalProviderProps {
	children: ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
	// useState
	const [showModal, setShowModal] = useState(false)

	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
