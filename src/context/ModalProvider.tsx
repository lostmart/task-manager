import React, { useState } from "react"
import ModalContext from "./ModalContext"

import { IModalBody } from "./ModalContext"

interface ModalProviderProps {
	children: React.ReactNode
}

const emptyData: IModalBody = {
	showModal: false,
	bodyContent: "Hello test",
	modalTitle: "",
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
