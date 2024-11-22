import React, { useState } from "react"
// router
import { RouterProvider } from "react-router-dom"
import router from "./Router.tsx"

// components
import BannerComp from "./components/layout/BannerComp.tsx"
import ModalComp from "./components/layout/ModalComp.tsx"

const Layout = () => {
	const [showModal, setShowModal] = useState(true)

	const handleClick = () => {
		setShowModal((prev) => !prev)
	}

	return (
		<>
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
		</>
	)
}

export default Layout
