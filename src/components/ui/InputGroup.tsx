import { useState } from "react"
import { IconType } from "react-icons"

interface InputGroupProps {
	inputId: string
	icon: IconType
	inputType?: string
	onchange?: (value: string, inputId: string) => void
	trailingIcon?: IconType
	onTrailingIconClick?: () => void
}

const InputGroup = ({
	inputId,
	icon: Icon,
	inputType,
	onchange,
	trailingIcon: TrailingIcon,
	onTrailingIconClick,
}: InputGroupProps) => {
	const [inputVal, setInputVal] = useState<string>("")
	
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    if (onchange) onchange(e.target.value, inputId);
	};
	
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
        value={inputVal}
        onInput={handleInput}
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
  );
}

export default InputGroup
