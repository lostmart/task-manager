import { useNavigate } from "react-router-dom"
import ButtonComp from "../components/ButtonComp"

const ErrorPage = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate("/")
	}
	return (
		<div className="min-h-80 flex flex-col gap-12 items-center justify-center text-zinc-700">
			<h1 className="text-9xl">404</h1>
			<div className="text-center">
				<p className="text-4xl">Oops...</p>
				<p className="text-4xl">Page not found</p>
			</div>
			<ButtonComp text="Back Home" theme="secondary" onClick={handleClick} />
		</div>
	)
}

export default ErrorPage
