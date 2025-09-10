import "./loading.css"

const RenderLoading = (): JSX.Element => {
	return (
		<div className="absolute w-full h-full bg-white inset-0 flex flex-col items-center justify-center">
			<div className="loader bg-purple-600"></div>
			<div className="pt-4">loading ...</div>
		</div>
	)
}

export default RenderLoading
