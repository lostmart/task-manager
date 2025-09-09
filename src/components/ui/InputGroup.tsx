import { useState } from "react"
import { IconType } from "react-icons"

interface InputGroupProps {
	inputId: string
	icon: IconType
	onchange?: (value: string, inputId: string) => void
}

const InputGroup = ({ inputId, icon: Icon, onchange }: InputGroupProps) => {
	const [inputVal, setInputVal] = useState<string>("")
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputVal(e.target.value)
		if (onchange && typeof onchange === "function")
			onchange(e.target.value, inputId)
	}
	return (
		<div className="flex border-solid border-zinc-400 border-2">
			<label htmlFor={inputId} className="flex justify-center items-center p-3">
				<Icon />
			</label>
			<input
				type="text"
				id={inputId}
				placeholder={inputId}
				className="p-2 w-full"
				value={inputVal}
				onInput={handleInput}
			/>
		</div>
	)
}

export default InputGroup
