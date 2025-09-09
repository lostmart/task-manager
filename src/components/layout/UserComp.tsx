import { useState } from "react"
import InputGroup from "../ui/InputGroup"
import { FaRegEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa6"
import logger from "../../utils/logger"
import ButtonComp from "../ui/ButtonComp"

interface IUserDataForm {
	userEmail: string
	userPassword: string
}

const UserComp = () => {
	const [userDataForm, setUserDataForm] = useState<IUserDataForm>({
		userEmail: "",
		userPassword: "",
	})

	logger.info(userDataForm, "the real data")
	console.log(userDataForm)

	const [showPassword, setShowPassword] = useState(false)

	const handleUserDataUpdate = (value: string, inputId: string) => {
		setUserDataForm((prev) => {
			// prev is guaranteed to exist since we no longer allow null
			if (inputId === "email") {
				return {
					...prev,
					userEmail: value,
				}
			}
			if (inputId === "password") {
				return {
					...prev,
					userPassword: value,
				}
			}
			return prev // Return previous state if no changes are made
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		// Handle form submission
		e.preventDefault()
		console.log("Form submitted:", userDataForm)
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col w-full text-base">
			<div className="p-5 flex flex-col gap-4">
				<InputGroup
					inputId="email"
					icon={FaRegEnvelope}
					onchange={(value, inputId) => handleUserDataUpdate(value, inputId)}
					inputType="email"
				/>
				<InputGroup
					inputId="password"
					icon={FaLock}
					onchange={handleUserDataUpdate}
					inputType={showPassword ? "text" : "password"}
					trailingIcon={showPassword ? FaRegEyeSlash : FaRegEye}
					onTrailingIconClick={() => setShowPassword((prev) => !prev)}
				/>
			</div>
			<footer className="h-20 bg-zinc-200 flex gap-4 items-center justify-end px-3 md:px-5">
				<ButtonComp
					text="Cancel"
					theme="neutral"
					onClick={() => console.log("cancel")}
				/>
				<ButtonComp
					text="Send"
					type="submit"
					onClick={() => console.log("send")}
				/>
			</footer>
		</form>
	)
}

export default UserComp
