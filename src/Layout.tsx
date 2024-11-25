import React from "react"
// router
import { RouterProvider } from "react-router-dom"
import router from "./Router.tsx"

// components
import BannerComp from "./components/layout/BannerComp.tsx"
import ModalComp from "./components/layout/ModalComp.tsx"

// context
import ModalProvider from "./context/ModalProvider"

const Layout = () => {
	return (
		<>
			<ModalProvider>
				<ModalComp />
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
		</>
	)
}

export default Layout
