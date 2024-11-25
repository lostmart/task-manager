import InputGroup from "../ui/InputGroup"
import { FaRegEnvelope } from "react-icons/fa6"

const UserComp = () => {
	return (
		<form>
			<InputGroup inputId="email" icon={FaRegEnvelope} />
		</form>
	)
}

export default UserComp
