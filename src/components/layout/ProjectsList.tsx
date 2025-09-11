import { FaEllipsisVertical } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks/useProjectFetch"
import RenderLoading from "../ui/LoadinComp"
import { Project } from "../../types/project.type"
import ButtonComp from "../ui/ButtonComp"

const ProjectsList = () => {
	const { projects, isLoading, error, refetch } = useProjects()
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
					<Link key={project.id} to={`/projects/${project.id}`}>
						<article className="flex flex-col items-center p-4 bg-slate-100 mt-2 relative hover:bg-slate-200 transition-colors">
							<h2 className="flex justify-between w-full">
								{project.projectName}
								<button
									className="p-2 bg-slate-100 hover:bg-slate-300 rounded"
									onClick={(e) => {
										e.preventDefault() // Prevent navigation when clicking the button
										console.log("Options clicked for project:", project.id)
									}}
								>
									<FaEllipsisVertical />
								</button>
							</h2>
							<p className="text-gray-600">{project.description}</p>
						</article>
					</Link>
				))
			)}
		</div>
	)
}

export default ProjectsList
