// context
import { useContext } from "react"
import ModalContext from "../context/ModalContext"

// components
import ButtonComp from "../components/ui/ButtonComp"
import UserComp from "../components/layout/UserComp"

const Home = () => {
	const { setModalData } = useContext(ModalContext)

	const logIn = () => {
		setModalData((prev) => ({
			...prev,
			showModal: true,
			bodyContent: <UserComp handleCancelProp={handleCancel} />,
			modalTitle: "Log In",
		}))
	}
	const handleCancel = () => {
		console.log("Cancel")
		setModalData((prev) => ({
			...prev,
			showModal: false,
		}))
	}
	const signUp = () => {
		// setModalData((prev) => !prev)
		return
	}
	return (
		<section className="min-h-80 flex flex-col items-center justify-center">
			<h2 className="my-24 text-4xl leading-subTitle text-zinc-700 max-w-lg text-center text-shadow ">
				Welcome to PMT (Poject Management Tool)
			</h2>
			<div className="flex flex-col md:flex-row gap-7">
				<ButtonComp text="LogIn" theme="secondary" onClick={logIn} />
				<ButtonComp text="SignUp" onClick={signUp} />
			</div>
		</section>
	)
}

export default Home
