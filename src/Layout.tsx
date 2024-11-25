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
			<React.StrictMode>
				<ModalProvider>
					<ModalComp />
					<BannerComp text="Task Management" />
					<main className="bg-zinc-100">
						<RouterProvider
							router={router}
							future={{ v7_startTransition: true }}
						/>
					</main>
				</ModalProvider>
			</React.StrictMode>
		</>
	)
}

export default Layout
