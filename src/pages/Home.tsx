import { useContext } from "react"
import ButtonComp from "../components/ui/ButtonComp"
import ModalContext from "../context/ModalContext"

const Home = () => {
	const { setShowModal } = useContext(ModalContext)

	const logIn = () => {
		setShowModal((prev) => !prev)
	}
	const signUp = () => {
		setShowModal((prev) => !prev)
	}
	return (
		<section className="min-h-80 flex flex-col items-center justify-center">
			<h2 className="my-28 text-5xl leading-subTitle text-zinc-700 max-w-sm text-center text-shadow ">
				Welcome to the Epita's Task Manager
			</h2>
			<div className="flex flex-col gap-7">
				<ButtonComp text="LogIn" theme="secondary" onClick={logIn} />
				<ButtonComp text="SignUp" onClick={signUp} />
			</div>
		</section>
	)
}

export default Home
