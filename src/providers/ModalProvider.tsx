import React, { useState } from "react"
import ModalContext from "../context/ModalContext"

import { IModalBody } from "../context/ModalContext"

interface ModalProviderProps {
	children: React.ReactNode
}

const emptyData: IModalBody = {
	showModal: false,
	bodyContent: "Hello test",
	modalTitle: "Test title",
	confirmFn: () => true,
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [modalData, setModalData] = useState(emptyData)

	return (
		<ModalContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
