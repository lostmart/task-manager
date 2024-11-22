// router
import { createBrowserRouter } from "react-router-dom"

// pages
import Home from "./pages/Home.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"


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

export default router
