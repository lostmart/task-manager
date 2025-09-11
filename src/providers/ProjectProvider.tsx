import React, { useState } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import { Project } from "../types/project.type"

interface ProjectProviderProps {
	children: React.ReactNode
}

const emptyProjects: Project[] = [
	{
		id: 0,
		projectName: "",
		ownerId: 0,
		manager: 0,
		description: "",
	},
]

const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
	const [projects, setProjects] = useState(emptyProjects)

	return (
		<ProjectsContext.Provider value={{ projects, setProjects }}>
			{children}
		</ProjectsContext.Provider>
	)
}

export default ProjectProvider
