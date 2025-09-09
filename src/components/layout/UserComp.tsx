import { useState } from "react"
import InputGroup from "../ui/InputGroup"
import { FaRegEnvelope, FaRegEye } from "react-icons/fa6"

interface IUserDataForm {
	userEmail: string
	userPassword: string
}

const UserComp = () => {
	const [userDataForm, setUserDataForm] = useState<IUserDataForm>({
		userEmail: "",
		userPassword: "",
	})

	console.log(userDataForm)

	const handleUserDataUpdate = (value: string, inputId: string) => {
		console.log(inputId)

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

	return (
		<form
			onSubmit={() => true}
			className="flex flex-col gap-4 w-full text-base"
		>
			<InputGroup
				inputId="email"
				icon={FaRegEnvelope}
				onchange={(value, inputId) => handleUserDataUpdate(value, inputId)}
				inputType="email"
			/>
			<InputGroup
				inputId="password"
				icon={FaRegEye}
				onchange={(value, inputId) => handleUserDataUpdate(value, inputId)}
				inputType="password"
			/>
		</form>
	)
}

export default UserComp
