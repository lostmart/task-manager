import { useState } from "react"
import InputGroup from "../ui/InputGroup"
import { FaRegEnvelope, FaRegUser } from "react-icons/fa6"

interface IUserDataForm {
	userName: string
	userEmail: string
}

const UserComp = () => {
	const [userDataForm, setUserDataForm] = useState<IUserDataForm>({
		userName: "",
		userEmail: "",
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
			if (inputId === "username") {
				return {
					...prev,
					userName: value,
				}
			}
			return prev // Return previous state if no changes are made
		})
	}

	return (
		<form onSubmit={() => true} className="flex flex-col gap-4">
			<InputGroup
				inputId="email"
				icon={FaRegEnvelope}
				onchange={(value, inputId) => handleUserDataUpdate(value, inputId)}
			/>
			<InputGroup
				inputId="username"
				icon={FaRegUser}
				onchange={(value, inputId) => handleUserDataUpdate(value, inputId)}
			/>
		</form>
	)
}

export default UserComp
