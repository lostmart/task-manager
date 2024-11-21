import ButtonComp from "../components/ButtonComp"

const Home = () => {
	const logIn = () => {
		console.log("you need to run the log in request")
	}
	const signUp = () => {
		console.log("you need to run the sign up request")
	}
	return (
		<section className="min-h-96 flex flex-col items-center justify-center">
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
