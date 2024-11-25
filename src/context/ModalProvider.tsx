import React, { useState } from "react"
import ModalContext from "./ModalContext"

interface ModalProviderProps {
	children: React.ReactNode
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [showModal, setShowModal] = useState(true)

	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
