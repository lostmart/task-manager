// router
import { createBrowserRouter } from "react-router-dom"

// pages
import Home from "./pages/Home.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import ProjectsPage from "./pages/ProjectsPage.tsx"

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/projects",
			element: <ProjectsPage />,
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
