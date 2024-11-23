import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useCallback,
} from "react"

interface ModalContextProps {
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = useCallback(() => setIsModalOpen(true), [])
	const closeModal = useCallback(() => setIsModalOpen(false), [])

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export const useModal = (): ModalContextProps => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider")
	}
	return context
}
