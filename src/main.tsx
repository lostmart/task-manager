import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import React from "react"
import Home from "./pages/Home.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		/>
	</React.StrictMode>
)
