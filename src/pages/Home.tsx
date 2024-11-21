import ButtonComp from "../components/ButtonComp"

const Home = () => {
	return (
		<section className="min-h-96 flex flex-col items-center justify-center">
			<h2 className="my-28 text-5xl leading-subTitle text-zinc-700 max-w-sm text-center text-shadow ">
				Welcome to the Epita's Task Manager
			</h2>
			<div className="flex flex-col gap-7">
				<ButtonComp text="Button One" theme="secondary" onClick={() => true} />
				<ButtonComp text="Button two" onClick={() => true} />
			</div>
		</section>
	)
}

export default Home
