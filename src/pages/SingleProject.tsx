import { useParams } from "react-router-dom"
import { useSingleProject } from "../hooks/useSingleProjectFetch"
import CardComp from "../components/ui/CardComp"

const SingleProject = () => {
	const { id } = useParams<{ id: string }>()
	const { project, isLoading, error } = useSingleProject(id!)

	// TODO -
	// fetch tasks
	// fetch team members
	// fetch owner details

	if (isLoading) {
		return (
			<section>
				<h1 className="text-3xl text-center py-3">Loading...</h1>
			</section>
		)
	}

	if (error) {
		return (
			<section>
				<h1 className="text-3xl text-center py-3">Error</h1>
				<p className="text-center text-red-500">{error}</p>
			</section>
		)
	}

	if (!project) {
		return (
			<section>
				<h1 className="text-3xl text-center py-3">Project Not Found</h1>
			</section>
		)
	}

	console.log("Project:", project)

	return (
		<section>
			<h1 className="text-3xl text-center py-3">{project.projectName}</h1>
			<div>
				<CardComp
					title={project.projectName}
					description={project.description}
					cardId={1}
					onCardClick={() => {}}
				/>
			</div>
		</section>
	)
}

export default SingleProject
