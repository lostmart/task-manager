import { FaEllipsisVertical } from "react-icons/fa6"
// import { Link } from "react-router-dom"
import { useProjects } from "../../hooks/useProjectFetch"
import RenderLoading from "../ui/LoadinComp"
import { Project } from "../../types/project.type"
import ButtonComp from "../ui/ButtonComp"
import HelpMenuGroup from "./HelpMenuGroup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ProjectsList = () => {
	const { projects, isLoading, error, refetch } = useProjects()
	const [activeMenuId, setActiveMenuId] = useState<number | string | null>(null)

	const navigate = useNavigate()

	const onArticleClick = (id: number | string) => {
		navigate(`/projects/${id}`)
	}

	const handleMenuToggle = (
		projectId: number | string,
		e: React.MouseEvent
	) => {
		e.preventDefault()
		e.stopPropagation()
		setActiveMenuId(activeMenuId === projectId ? null : projectId)
	}

	const handleMenuAction = (action: string, projectId: number | string) => {
		console.log(`${action} clicked for project:`, projectId)
		setActiveMenuId(null) // Close menu after action
		if (action === "view") return navigate(`/projects/${projectId}`)
	}

	// Show loading state
	if (isLoading) {
		return (
			<div className="container-xl p-2 lg:container mx-auto">
				<RenderLoading />
			</div>
		)
	}

	// Show error state with retry option
	if (error) {
		return (
			<div className="container-xl p-2 lg:container mx-auto">
				<div className="text-center p-8">
					<p className="text-red-500 mb-4">{error}</p>
					<button
						onClick={refetch}
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					>
						Retry
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className="container-xl p-2 lg:container mx-auto grid grid-cols-1 md:grid-cols-2 md:p-3 lg:grid-cols-3 gap-4">
			{projects.length === 0 ? (
				<div className="col-span-full text-center p-8">
					<p className="text-gray-500">No projects found</p>
					<ButtonComp text="Refresh" theme="primary" onClick={refetch} />
				</div>
			) : (
				projects.map((project: Project) => (
					// <Link key={project.id} to={`/projects/${project.id}`}>
					<article
						onClick={() => onArticleClick(project.id)}
						key={project.id}
						className="flex flex-col items-center p-4 bg-slate-100 mt-2 cursor-pointer relative hover:bg-slate-200 transition-colors"
					>
						<h2 className="flex justify-between w-full">
							{project.projectName}
							<button
								className="p-2 bg-slate-100 hover:bg-slate-300 rounded"
								onClick={(e) => handleMenuToggle(project.id, e)}
							>
								<FaEllipsisVertical />
							</button>
						</h2>
						<HelpMenuGroup
							isVisible={activeMenuId === project.id}
							onMenuAction={(action) => handleMenuAction(action, project.id)}
							onClose={() => setActiveMenuId(null)}
						/>
						<p className="text-gray-600">{project.description}</p>
					</article>
					// </Link>
				))
			)}
		</div>
	)
}

export default ProjectsList
