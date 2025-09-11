import { IconType } from "react-icons"

interface InputGroupProps {
	inputId: string
	value?: string // Make it optional with default
	icon: IconType
	inputType?: string
	onchange?: (value: string, inputId: string) => void
	trailingIcon?: IconType
	onTrailingIconClick?: () => void
}

const InputGroup = ({
	inputId,
	value = "", // Default to empty string
	icon: Icon,
	inputType,
	onchange,
	trailingIcon: TrailingIcon,
	onTrailingIconClick,
}: InputGroupProps) => {
	// Remove internal state - use the value prop directly
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onchange) onchange(e.target.value, inputId)
	}

	return (
		<div className="flex border-solid border-zinc-400 border-2 relative">
			<label htmlFor={inputId} className="flex justify-center items-center p-3">
				<Icon />
			</label>
			<input
				type={inputType || "text"}
				id={inputId}
				placeholder={inputId}
				className="p-2 w-full"
				value={value} // Use the value prop instead of internal state
				onChange={handleInput} // Use onChange instead of onInput
			/>
			{TrailingIcon && (
				<button
					type="button"
					onClick={onTrailingIconClick}
					className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
				>
					<TrailingIcon />
				</button>
			)}
		</div>
	)
}

export default InputGroup
