import React, { useState } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import { Project } from "../types/project.type"

interface ProjectProviderProps {
	children: React.ReactNode
}

const emptyProject: Project = {
	projectName: "",
	ownerId: 0,
	manager: 0,
	description: "",
}

const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
	const [project, setProjects] = useState(emptyProject)

	return (
		<ProjectsContext.Provider value={{ project, setProjects }}>
			{children}
		</ProjectsContext.Provider>
	)
}

export default ProjectProvider
