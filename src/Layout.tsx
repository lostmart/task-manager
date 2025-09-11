import React from "react"
// router
import { RouterProvider } from "react-router-dom"
import router from "./Router.tsx"

// components
import BannerComp from "./components/layout/BannerComp.tsx"
import ModalComp from "./components/layout/ModalComp.tsx"

// context
import ModalProvider from "./providers/ModalProvider.tsx"
import ErrorProvider from "./providers/ErrorProvider.tsx"
import ProjectProvider from "./providers/ProjectProvider.tsx"

const Layout = () => {
	return (
		<>
			<React.StrictMode>
				<ProjectProvider>
					<ErrorProvider>
						<ModalProvider>
							<ModalComp
								modalTitle="Modal Title"
								showModal={true}
								bodyContent={<p>This is the modal body content.</p>}
								confirmFn={() => console.log("Modal confirmed!")}
							/>
							<BannerComp text="Task Management" />
							<main className="bg-zinc-100">
								<RouterProvider
									router={router}
									future={{ v7_startTransition: true }}
								/>
							</main>
						</ModalProvider>
					</ErrorProvider>
				</ProjectProvider>
			</React.StrictMode>
		</>
	)
}

export default Layout
