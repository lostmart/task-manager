// context
import { useContext } from "react"
import ModalContext from "../context/ModalContext"
import sleepingImg from "../assets/sleeping.gif"

import { useBackendHealth } from "../hooks/useBackendHealth"
//const ErrorContext = useContext(ModalContext)

import { ErrorContextType, TyeType } from "../types/error.type"

// components
import ButtonComp from "../components/ui/ButtonComp"
import UserComp from "../components/layout/UserComp"
import { useNavigate } from "react-router-dom"

const Home = () => {
	const { setModalData } = useContext(ModalContext)
	//const { setError } = useContext(ErrorContext)

	const navigate = useNavigate()

	const { isOnline } = useBackendHealth()

	const logIn = () => {

		if (!isOnline) {
			// create error
			const onlineError: ErrorContextType = {
				error: "Backend is offline",
				type: "network" as TyeType,
				tip: "Probably our server is sleeping 🙄 Give it a sec... he'll be up and running in no time ⌚",
			}

			setModalData((prev) => ({
				...prev,
				showModal: true,
				bodyContent: (
					<div className="text-center">
						<h3>{onlineError.error}</h3>
						<p className="text-lg text-zinc-400">
							Errot type: {onlineError.type}
						</p>
						<figure className="p-5">
							<img
								className="mx-auto block max-w-28 mix-blend-multiply"
								src={sleepingImg}
								alt="offline"
							/>
							<figcaption className="text-lg">{onlineError.tip}</figcaption>
						</figure>
					</div>
				),
				modalTitle: "That's an error !!",
				titleColor: "danger",
			}))
			return
		}

		setModalData((prev) => ({
			...prev,
			showModal: true,
			bodyContent: <UserComp handleCancelProp={handleCancel} onLoginSuccess={() => navigate("/projects")} />,
			modalTitle: "Log In",
		}))
	}
	const handleCancel = () => {
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
				Welcome to PMT (Project Management Tool)
			</h2>
			<div className="flex flex-col md:flex-row gap-7">
				<ButtonComp text="LogIn" theme="secondary" onClick={logIn} />
				<ButtonComp text="SignUp" onClick={signUp} />
			</div>
		</section>
	)
}

export default Home
