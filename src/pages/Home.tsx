import { useContext } from "react"
import ButtonComp from "../components/ui/ButtonComp"
import ModalContext, { ModalContextProps } from "../context/ModalContext"

const Home = () => {
	const { setModalData } = useContext(ModalContext)

	const logIn = () => {
		setModalData((prev: ModalContextProps) => {
			return {
				...prev,
			}
		})
	}
	const signUp = () => {
		setModalData((prev) => !prev)
	}
	return (
		<section className="min-h-80 flex flex-col items-center justify-center">
			<h2 className="my-24 text-5xl leading-subTitle text-zinc-700 max-w-sm text-center text-shadow ">
				Welcome to the Epita's Task Manager
			</h2>
			<div className="flex flex-col md:flex-row gap-7">
				<ButtonComp text="LogIn" theme="secondary" onClick={logIn} />
				<ButtonComp text="SignUp" onClick={signUp} />
			</div>
		</section>
	)
}

export default Home
