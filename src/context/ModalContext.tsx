import { createContext } from "react"

interface ModalContextProps {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextProps>({
	showModal: true,
	setShowModal: () => {
		return (prev: boolean) => !prev
	},
})

export default ModalContext
