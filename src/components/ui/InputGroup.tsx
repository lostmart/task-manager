import { IconType } from "react-icons"

interface InputGroupProps {
	inputId: string
	icon: IconType
}

const InputGroup = ({ inputId, icon: Icon }: InputGroupProps) => {
	return (
		<div className="flex border-solid border-zinc-400 border-2">
			<label htmlFor={inputId} className="flex justify-center p-3">
				<Icon />
			</label>
			<input type="text" id={inputId} placeholder={inputId} className="p-4" />
		</div>
	)
}

export default InputGroup
