import { createContext } from "react"

interface TAppContext {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<TAppContext>({
	showModal: false,
	setShowModal: () => true,
})

export default ModalContext
