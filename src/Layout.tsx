import React, { useContext } from "react"
// router
import { RouterProvider } from "react-router-dom"
import router from "./Router.tsx"

// components
import BannerComp from "./components/layout/BannerComp.tsx"
import ModalComp from "./components/layout/ModalComp.tsx"

// context
import ModalProvider from "./context/ModalProvider.tsx"
import ModalContext from "./context/modalContext.ts"

const Layout = () => {
	const { showModal, setShowModal } = useContext(ModalContext)

	const handleClick = () => {
		console.log("run the clsoe cont")

		setShowModal(() => false)
	}

	return (
		<ModalProvider>
			<ModalComp show={showModal} clickClose={handleClick} />
			<BannerComp text="Task Management" />
			<main className="bg-zinc-100">
				<React.StrictMode>
					<RouterProvider
						router={router}
						future={{ v7_startTransition: true }}
					/>
				</React.StrictMode>
			</main>
		</ModalProvider>
	)
}

export default Layout
