import InputGroup from "../ui/InputGroup"
import { FaRegEnvelope, FaRegUser } from "react-icons/fa6"

const UserComp = () => {
	return (
		<form className="flex flex-col gap-4">
			<InputGroup inputId="email" icon={FaRegEnvelope} />
			<InputGroup inputId="username" icon={FaRegUser} />
		</form>
	)
}

export default UserComp
