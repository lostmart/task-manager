import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

// components

// pages
import React from "react"
import Home from "./pages/Home.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import BannerComp from "./components/BannerComp.tsx"

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
)

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<BannerComp text="Task Management" />
		<main className="bg-zinc-100">
			<React.StrictMode>
				<RouterProvider router={router} future={{ v7_startTransition: true }} />
			</React.StrictMode>
		</main>
	</>
)
