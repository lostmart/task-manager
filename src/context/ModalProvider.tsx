import React, { useState, useMemo, useEffect } from "react"
import ModalContext from "./modalContext"

interface ModalProviderProps {
	children: React.ReactNode
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		console.log("Provider - showModal changed:", showModal)
	}, [showModal])

	const contextValue = useMemo(() => ({ showModal, setShowModal }), [showModal])

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
