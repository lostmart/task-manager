import { createContext } from "react"

export interface IModalBody {
	showModal: boolean
	bodyContent: string | HTMLElement[] // Accepts either a string or an array of HTML node elements
}

interface ModalContextProps {
	modalData: IModalBody | null
	setModalData: React.Dispatch<React.SetStateAction<IModalBody>>
}

const ModalContext = createContext<ModalContextProps>({
	modalData: null,
	setModalData: () => {
		return (prev: boolean) => !prev
	},
})

export default ModalContext
