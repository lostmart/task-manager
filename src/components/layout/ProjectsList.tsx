import { useProjects } from "../../hooks/useProjectFetch"
import RenderLoading from "../ui/LoadinComp"
import { Project } from "../../types/project.type"
import ButtonComp from "../ui/ButtonComp"
import CardComp from "../ui/CardComp"
import { useNavigate } from "react-router-dom"

const ProjectsList = () => {
	const { projects, isLoading, error, refetch } = useProjects()

	const navigate = useNavigate()

	const onArticleClick = (id: number | string) => {
		navigate(`/projects/${id}`)
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
					<CardComp
						onCardClick={() => onArticleClick(project.id)}
						key={project.id}
						title={project.projectName}
						description={project.description}
						cardId={project.id}
						helpMenuGroup={true}
					/>
				))
			)}
		</div>
	)
}

export default ProjectsList
