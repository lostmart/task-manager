import { createContext } from "react"

export interface IModalBody {
	modalTitle: string
	showModal: boolean
	bodyContent: string | React.ReactNode // Accepts either a string or a react node
}

interface ModalContextProps {
	modalData: IModalBody | null
	setModalData: React.Dispatch<React.SetStateAction<IModalBody>>
}

const ModalContext = createContext<ModalContextProps>({
	modalData: null,
	setModalData: (prev) => {
		return {
			...prev,
		}
	},
})

export default ModalContext
