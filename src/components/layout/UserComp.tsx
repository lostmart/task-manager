import { useState } from "react"
import InputGroup from "../ui/InputGroup"
import { FaRegEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa6"
import ButtonComp from "../ui/ButtonComp"
import apiClient from "../../api/client"

interface IUserDataForm {
	userEmail: string
	userPassword: string
}

interface UserCompProps {
	handleCancelProp: () => void
}

interface IResponseError {
	data: {
		error: string
	}
	status: number
	statusText: string
}

const UserComp: React.FC<UserCompProps> = ({ handleCancelProp }) => {
	const [userDataForm, setUserDataForm] = useState<IUserDataForm>({
		userEmail: "",
		userPassword: "",
	})

	const [error, setError] = useState<string>("")

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

	const handleCancel = () => {
		handleCancelProp()
	}

	const handleSubmit = async (e: React.FormEvent) => {
		// Handle form submission
		setError("")
		e.preventDefault()
		console.log("Form submitted:", userDataForm)
		try {
			const res = await apiClient.post("/api/users/login", {
				email: userDataForm.userEmail,
				password: userDataForm.userPassword,
			})
			console.log("Login success:", res.data)
			// maybe save token -> localStorage.setItem("auth_token", res.data.token)
		} catch (err: IResponseError | any) {
			console.error("Login failed:", err?.response)
			const error = err?.response?.data.error
			setError(error)
		}
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
				<div>{error && <p className="text-red-500">{error}</p>}</div>
			</div>
			<footer className="h-20 bg-zinc-200 flex gap-4 items-center justify-end px-3 md:px-5">
				<ButtonComp text="Cancel" theme="neutral" onClick={handleCancel} />
				<ButtonComp text="Send" type="submit" onClick={handleSubmit} />
			</footer>
		</form>
	)
}

export default UserComp
