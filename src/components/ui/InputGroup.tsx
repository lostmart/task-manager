interface InputGroupProps {
	inputId: string
}

const InputGroup = ({ inputId }: InputGroupProps) => {
	return (
		<div className="flex">
			<label htmlFor={inputId}>icon here</label>
			<input type="text" id={inputId} placeholder={inputId} className="p-4" />
		</div>
	)
}

export default InputGroup
